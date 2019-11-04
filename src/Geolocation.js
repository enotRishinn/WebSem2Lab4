import React from 'react';
import './Geolocation.css';
import { connect } from "react-redux";
import { loadGeolocation, fetchGeolocationError } from './actions/geolocationAction';
import { fetchWeatherByCoords } from './actions/fetchWeatherByCoords';

class Geolocation extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    return (
      <div className="header">
        <div className="headerText">Weather here</div>
        <button className="headerButton" onClick={() => this.getGeolocation()}>Update Geolocation</button>
      </div>
    );
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.loadGeolocation({lat: position.coords.latitude, lon: position.coords.longitude});
        this.props.fetchWeatherByCoords({lat: position.coords.latitude, lon: position.coords.longitude});
      },
      () => {
        this.props.loadGeolocation({lat: 55.45, lon: 37.36});
        this.props.fetchWeatherByCoords({lat: 55.45, lon: 37.36});
      });
    } else {
      this.props.fetchGeolocationError('your browser does not support geolocation');
    }
  }
}


function mapStateToProps(state) {
return {
  coords: state.geolocation.coords,
  forecast: state.geolocation.forecast,
  error: state.geolocation.error
};
}

function mapDispatchToProps(dispatch) {
return {
  loadGeolocation: (coords) => {
    dispatch(loadGeolocation(coords));
  },

  fetchWeatherByCoords: (coords) => {
    dispatch(fetchWeatherByCoords(coords));
  },

  fetchGeolocationError: (error) => {
    dispatch(fetchGeolocationError(error));
  }
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);
