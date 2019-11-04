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

const getGeolocation = () => {

}

export default Geolocation;
