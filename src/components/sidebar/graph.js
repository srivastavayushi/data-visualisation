import React,{useState, useContext} from 'react'
import { Chart } from 'react-charts'
import { useAPI , APIContext} from "../context/ApiContext";


export default function Graph() {
  const { data } = useAPI();
  const { selectedData } = useContext(APIContext);
  console.log(Array.isArray(selectedData[0].selectedCountry));

  let countryArray=[];
  // eslint-disable-next-line
  let finalGraphData=[];
  let graphData=[];
  let countryMatch=[];

  if(selectedData.length>1){
  countryArray = selectedData[0].selectedCountry.map(country=>{return country});

  const countryMatchVar = countryArray.forEach(singleCountry=>{
    graphData = data.filter(obj=>(obj.country_or_area === singleCountry) && (obj.category ===selectedData[0].selectedCategory));
    countryMatch.push(graphData);
   
  });

  const graphDataTwo = countryMatch.forEach(obj=>finalGraphData.push(obj.map(innerObj=>([innerObj.year,innerObj.value]))));

};
const onButtonClick = (e)=>{
  finalGraphData = [];
  console.log("button clicked");
  console.log(finalGraphData);
}
  const dataGraph = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: finalGraphData[0],
      },
      {
        label: 'Series 2',
        data: finalGraphData[1],
      },
      {
        label: 'Series 2',
        data: finalGraphData[2],
      }
    ],
    [finalGraphData]
  )
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
      className="chart"
    >

      
      {finalGraphData.length > 0 &&
    <Chart data={dataGraph} series={series} axes={axes} tooltip/>
      }
        <br/>
     {finalGraphData.length > 0 &&
    <button onClick={onButtonClick}>Add another graph</button>
      }
      {graphData.length === 0 && 
      <div> <h3>Kindly select the options to view the chart.</h3>
      <h5>In case you have already selected the options, we are unable to find the data relating to your choices. Try with some other set of options !</h5></div>
     
        } 
      
    </div>
  )
}