import React from 'react';
import './App.css';
import Geolocation from './Geolocation';
import AddedCities from './AddedCities';

function App() {
  return (
    <div className="App">
      <Geolocation />
      <AddedCities />
    </div>
  );
}

export default App;
