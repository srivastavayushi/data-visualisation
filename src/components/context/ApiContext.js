import React, { useContext, useState, useEffect, createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initial state
const initialState = {
  selectedData: [
  {
      id:0,
      selectedCountry: undefined,
      selectedCategory: undefined,
  },
  ]
}


export const APIContext = createContext(initialState);

function APIContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(jsonData) {   
       //console.log(jsonData); 
        setData(jsonData);

      });
  }

  // Fetch Data
  useEffect(()=>{
    getData()
  },[])

// An array of selected data
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  function addSelectedData(data) {
    dispatch({
      type: 'ADD_SELECTED_DATA',
      payload: data
    });
  }


  return (
    <APIContext.Provider value={{ 
      selectedData: state.selectedData,

      data, 
      isLoading, 
      addSelectedData,

     }}>
    {children}
  </APIContext.Provider>
  );
}

export default APIContextProvider;

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
}