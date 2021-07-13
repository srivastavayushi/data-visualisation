import React,{useContext} from 'react'
import { Chart } from 'react-charts'
import { useAPI , APIContext} from "../context/ApiContext";


export default function Graph() {
  const { data } = useAPI();
  const { selectedData } = useContext(APIContext);

  let countryArray=[];
  // eslint-disable-next-line
  let finalGraphData=[];
  let graphData=[];
  let countryMatch=[];
 
  if(selectedData.length>1){
  countryArray = selectedData[0].selectedCountry.map(country=>{return country});

  countryArray.forEach(singleCountry=>{
    graphData = data.filter(obj=>(obj.country_or_area === singleCountry) && (obj.category ===selectedData[0].selectedCategory));
    countryMatch.push(graphData);
   
  });

countryMatch.forEach(obj=>finalGraphData.push(obj.map(innerObj=>([innerObj.year,innerObj.value]))));
};
  // eslint-disable-next-line
const dataPoints = [];
finalGraphData.map(dataset => {
  const newDataSet={
  label : "Series 1",
  data: dataset,
}
 dataPoints.push(newDataSet);
 return newDataSet;
})


const dataGraph = React.useMemo(
    () => dataPoints,
    [dataPoints]
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
    <div>
      {finalGraphData.length > 0 &&
     <a href="/"><button>Add another graph</button></a>
    
      }
      {graphData.length === 0 && 
      <div> <h3>Kindly select the options to view the chart.</h3>
      <h5>In case you have already selected the options, we are unable to find the data relating to your choices. Try with some other set of options !</h5></div>
      } 
    {finalGraphData.length > 0 && selectedData[0].selectedCategory !== undefined && <div
      style={{
        width: '400px',
        height: '300px'
      }}
      className="chart"
    > 
    <Chart data={dataGraph} series={series} axes={axes} tooltip/>
    </div>}
    </div>
  )
}