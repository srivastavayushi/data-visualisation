import React,{useState, useContext,useEffect} from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'
import Geocode from "react-geocode";
import { useAPI , APIContext} from "../context/ApiContext";

export default function CountrySelect() {
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.setApiKey('AIzaSyDpe9SPMWbdI8CCBBXo3UooM7suGVBUQtM');
    const { data } = useAPI();
 
    const url = window.location.href;
    //Write logic to render all countries as dropdown options

       // Create an array of all unique countries
        let allCountries = data.map(obj => obj.country_or_area);
        const optionsCountry = [...new Set(allCountries)]; 
       // console.log(optionsCountry);

        // Create an array of all unique years
        let allYears = data.map(obj => obj.year);
        const optionsYear = [...new Set(allYears)];
        
        // Create an array of all categories
        let allCategories = data.map(obj => obj.category);
        const options = [...new Set(allCategories)];
    
        const defaultOptionCountry = optionsCountry[0];
        const defaultOptionYear = optionsYear[0];
        const defaultOption = options[0];

        // update selected country, year and category
        const [selectedCountry, setSelectedCountry] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState();
        const [countries,setCountries] = useState([]);
        const [selectedYear, setSelectedYear] = useState();


        // eslint-disable-next-line
        const onCountryChange = (e) => {
        
          const oneCountry = [];
            Geocode.fromAddress(e.value).then(
              (response) => {
                const { lat, lng } = response.results[0].geometry.location; 
                oneCountry.push(e.value,lat,lng); 
              },
              (error) => {
                console.error(error);
              }
            );
           countries.push(oneCountry);
          
           setCountries(countries);
           setSelectedCountry(countries);    
        };

        const onCategoryChange = (e) => {
        setSelectedCategory(e.value); 
        };
        const onYearChange = (e)=>{
          setSelectedYear(e.value);
        }

        const { addSelectedData } = useContext(APIContext);
        
        const onSubmit = e => {
            e.preventDefault();
        
            const newSelectedData = {
              id: Math.floor(Math.random() * 100000000),
              selectedCountry,
              selectedCategory,
              selectedYear,
            
            }  
            if(selectedCountry[0] === undefined || selectedCategory === undefined){
            window.history.replaceState(null, "Search Results", `${url}?country=undefined&category=undefined`);
            alert('Kindly fill all options');
            }else{
              window.history.replaceState(null, "Search Results", `${url}?country=${selectedCountry[0][0]}&category=${selectedCategory}`);
            }
            
            
            addSelectedData(newSelectedData);
          }
        
        

    return(
        <form onSubmit={onSubmit}>
          {countries.map(country=>{return(<button key={country}>{country[0]}</button>)})}
        <br/>
        <div className="parameter-select">
            <Dropdown options={optionsCountry} value={selectedCountry} onChange={onCountryChange} placeholder="Select Country" />   
        </div>
        
         <div className="parameter-select">
         <Dropdown options={options} value={selectedCategory} onChange={onCategoryChange} placeholder="Select Category"/>
        </div>
        <div className="parameter-select">
         <Dropdown options={optionsYear} value={selectedYear} onChange={onYearChange} placeholder="Select Year"/>
        </div>
        <br/>
        <button type="submit">Display Me</button>
        </form>
       
    )
}