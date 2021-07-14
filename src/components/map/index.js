import React, {useContext, useState} from 'react';
import { useAPI , APIContext} from "../context/ApiContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";


const mapContainerStyle = {
  height: "80vh",
  width: "50vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 26.753901, 
  lng: 82.155159
};


export default function Map() {
  const { data } = useAPI();
  const { selectedData } = useContext(APIContext);

  // FETCH DATA STATE 
  const [ libraries ] = useState(['places']);

  let countryArray=[];
  // eslint-disable-next-line
  let finalGraphData=[];
  let graphData=[];
  let countryMatch=[];
  let i = 0;

  if(selectedData.length>=2){
    countryArray = selectedData[0].selectedCountry.map(country=>{return country[0]});   

    countryArray.forEach(singleCountry=>{ 
    graphData = data.filter(obj=>(
    obj.country_or_area === singleCountry) && (obj.category ===selectedData[0].selectedCategory) &&(obj.year === selectedData[0].selectedYear
        ));
    
    const points = {
      lat : selectedData[0].selectedCountry[i][1],
      lng : selectedData[0].selectedCountry[i][2]
    }
    graphData.push(points);
 
    countryMatch.push(graphData); 
    i=i+1;
    }); 
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDpe9SPMWbdI8CCBBXo3UooM7suGVBUQtM',
    libraries,
  });
  

//console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

   
  return (
    //The code to render a map goes here.
    <div className="map">
   
     {countryMatch.length>0 && selectedData[0].selectedCategory !== undefined && selectedData[0].selectedYear !== null && 
      <div>
      <h2>During the year {selectedData[0].selectedYear}</h2>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {countryMatch.map(country=>{
        
          return(
          <Marker
          key={country[1].lat}
            position={{
              lat: country[1].lat, 
              lng: country[1].lng,
            }}
            />
        )})}
          
               
    </GoogleMap>
    </div>
    }
    </div>
  );
}











