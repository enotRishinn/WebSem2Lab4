import React from "react";
import './WeatherData.css';

class WeatherData extends React.Component {
  render() {
    return (
      <div>
        <div className="leftWeather">
          <div className="City">City: {this.props.data.name}</div>
          <div className="Temp">Temperature: {Math.round(this.props.data.main.temp)} °C</div>
          <img className="Icon" src={`https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}.png`} />
        </div>

        <div className="rightWeather">
          <div className="Pressure">Pressure: {this.props.data.main.pressure} hPa</div>
          <div className="Humidity">Humidity: {this.props.data.main.humidity}%</div>
          <div className="Clouds">Clouds: {this.props.data.clouds.all}%</div>
          <div className="Wind">Wind: {this.props.data.wind.speed} m/s</div>
          <div className="Coords">Coordinates: [{this.props.data.coord.lon}, {this.props.data.coord.lat}]</div>
        </div>
      </div>
    );
  }
}

export default WeatherData
