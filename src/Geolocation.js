import React from 'react';
import './Geolocation.css';
import WeatherData from './WeatherData'
import { connect } from "react-redux";
import { setCoords, fetchGeolocationError } from './actions/geolocationAction';
import { fetchWeatherByCoords } from './actions/fetchWeatherByCoords';

class Geolocation extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    let weatherBlock = null;
    if(this.props.forecast) {
      weatherBlock = <WeatherData data={this.props.forecast}/>;
    } else if (!this.props.error){
      weatherBlock = <div className="error">Error: {this.props.error}</div>;
    }

    return (
      <div className="header">
        <div className="headerText">Weather here</div>
        <button className="headerButton" onClick={() => this.getGeolocation()}>Update Geolocation</button>
        {weatherBlock}
      </div>
    );
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
        console.log(this.props.coords);
        this.props.fetchWeatherByCoords(this.props.coords);
      },
      () => {
        this.props.setCoords({lat: 55.45, lon: 37.36});
        this.props.fetchWeatherByCoords(this.props.coords);
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
  setCoords: (coords) => {
    dispatch(setCoords(coords));
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
