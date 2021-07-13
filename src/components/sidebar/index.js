import React from 'react';
import Graph from './graph';
import CountrySelect from './country-select';


export default function Sidebar() {

  return (
    <div className="sidebar" >
      <div className="dropdowns">
        <CountrySelect />
      </div>
      <Graph />
    </div>
  );
}
