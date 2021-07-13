import React,{useState, useContext,useEffect} from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'
import { useAPI , APIContext} from "../context/ApiContext";

export default function CountrySelect() {
    const { data } = useAPI();
 
    //Write logic to render all countries as dropdown options

       // Create an array of all unique countries
        let allCountries = data.map(obj => obj.country_or_area);
        const optionsCountry = [...new Set(allCountries)]; 

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

        // eslint-disable-next-line
        const onCountryChange = (e) => {
           countries.push(e.value);
           setCountries(countries);
           setSelectedCountry(countries);    
        };

        const onCategoryChange = (e) => {
        setSelectedCategory(e.value); 
        };
        const { addSelectedData } = useContext(APIContext);
        
        const onSubmit = e => {
            e.preventDefault();
        
            const newSelectedData = {
              id: Math.floor(Math.random() * 100000000),
              selectedCountry,
              selectedCategory,
            }   
            console.log(newSelectedData.selectedCountry);         
            addSelectedData(newSelectedData);
          }
        
        

    return(
        <form onSubmit={onSubmit}>
          {countries.map(country=>{return(<button key={country}>{country}</button>)})}
        <div className="country-select">
            <Dropdown options={optionsCountry} value={selectedCountry} onChange={onCountryChange} placeholder="Select Country" />   
        </div>
        
         <div className="parameter-select">
         <Dropdown options={options} value={selectedCategory} onChange={onCategoryChange} placeholder="Select Category" />
        </div>
        <br/>
        <button type="submit">Graph me</button>
        </form>
       
    )
}