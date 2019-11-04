import React from 'react';
import './Geolocation.css';

class Geolocation extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

render() {
  return (
    <div className="header">
      <div className="headerText">Weather here</div>
      <button className="headerButton">Update Geolocation</button>
    </div>
  );
}
}

getGeolocation() {
  if (navigator.geolocation) {
    coords {
      latitude: position.coords.lat;
      longitude : position.coords.lon;
    }
  }
}

export default Geolocation;
