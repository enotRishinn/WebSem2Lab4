import React from 'react';
import './Geolocation.css';
import WeatherGeolocation from './WeatherGeolocation'
import { connect } from "react-redux";
import { setCoords, fetchGeolocationError } from './actions/geolocationAction';
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
        {!this.props.error ? this.props.coords && (
          <WeatherGeolocation
            onFetch={() => this.props.fetchWeatherByCoords(this.props.coords)}
            forecast={this.props.forecast}/>
        ) : (
          <div className="error">Error: {this.props.error}</div>
        )}
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
