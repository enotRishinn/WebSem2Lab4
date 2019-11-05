import React from 'react';
import './App.css';
import Geolocation from './components/Geolocation/Geolocation';
import AddedCities from "./components/AddedCities/AddedCities";

function App() {
  return (
    <div className="App">
      <Geolocation />
      <AddedCities />
    </div>
  );
}

export default App;
