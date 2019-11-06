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
      <div className="WeatherBlock">
        <div className="leftWeather">
          <div className="City">{cityName}</div>
          <img className="Icon" src={`https://openweathermap.org/img/wn/${icon}.png`} />
          <div className="Temp">{Math.round(temperature)} °C</div>
        </div>

        <div className="rightWeather">
          <div className="Pressure">Pressure: {pressure} hPa</div>
          <div className="Humidity">Humidity: {humidity}%</div>
          <div className="Clouds">Clouds: {description}</div>
          <div className="Wind">Wind: {windSpeed} m/s</div>
          <div className="Coords">Coordinates: [{latitude}, {longitude}]</div>
        </div>

        {onDelete && <button className="button" onClick={onDelete}>X</button>}
      </div>

    );
  }
}
