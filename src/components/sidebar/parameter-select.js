import React,{useState} from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'
import { useAPI } from "../context/ApiContext";

export default function ParameterSelect() {
    const { data } = useAPI();

    //Write logic to render all countries as dropdown options

    // Create an array of all categories
    let allCategories = data.map(obj => obj.category);
    const options = [...new Set(allCategories)];
      
    const defaultOption = options[0];

    const [selectedCategory, setSelectedCategory] = useState(defaultOption);

    const onCategoryChange = (e) => {
        console.log(e.value);
        setSelectedCategory(e.value);
     
    };
    return(
        <div className="parameter-select">
            <Dropdown options={options} value={selectedCategory} onChange={onCategoryChange} placeholder="Select an option" />
        </div>
    )
}