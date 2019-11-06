import React from "react";
import "./AddedWeather.css";
import Loader from "../Loader/Loader";


export default class AddedWeather extends React.Component {
  componentDidMount() {
    this.props.onFetch();
  }

  render() {
    if (!this.props.forecast) {
      return this.renderLoader();
    }

    return this.renderWeather();
  }

  renderLoader() {
    return <Loader />
  }

  renderWeather() {
    const {
      forecast: {
        cityName,
        temperature,
        icon,
        windSpeed,
        description,
        pressure,
        humidity,
        coords: {
          lat: latitude,
          lon: longitude
        } = {}
      },
      onDelete
    } = this.props;

    return (
      <div className="AddWeatherBlock">
        <div className="AddLeftWeather">
          <div className="AddCity">{cityName}</div>
          <img className="AddIcon" src={`https://openweathermap.org/img/wn/${icon}.png`} />
          <div className="AddTemp">{Math.round(temperature)} °C</div>
        </div>

        <div className="AddRightWeather">
          <div className="AddPressure">Pressure: {pressure} hPa</div>
          <div className="AddHumidity">Humidity: {humidity}%</div>
          <div className="AddClouds">Clouds: {description}</div>
          <div className="AddWind">Wind: {windSpeed} m/s</div>
          <div className="AddCoords">Coordinates: [{latitude}, {longitude}]</div>
        </div>
        <button className="button" onClick={onDelete}>Delete</button>
      </div>

    );
  }
}
