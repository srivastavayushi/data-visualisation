import './App.css';
import Map from './components/map';
import Sidebar from './components/sidebar';
import APIContextProvider from "./components/context/ApiContext";

function App() {
  const styleObj = {
  backgroundColor : "#E8F0F2",
    color: "#053742",
  
}
  return (
    <APIContextProvider>
    <div className="App" style={styleObj}>
      <Sidebar/>
      <Map />
    </div>
    </APIContextProvider>
  );
}

export default App;
