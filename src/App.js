import './App.css';
import Map from './components/map';
import Sidebar from './components/sidebar';
import APIContextProvider from "./components/context/ApiContext";

function App() {

  return (
    <APIContextProvider>
    <div className="App">
      <Sidebar/>
      <Map />
    </div>
    </APIContextProvider>
  );
}

export default App;
