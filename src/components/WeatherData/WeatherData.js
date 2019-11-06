import React from "react";
import './WeatherData.css';

class WeatherData extends React.Component {

  render() {
    return (
      <div className="WeatherBlock">
        <div className="leftWeather">
          <div className="City">{this.props.data.name}</div>
          <img className="Icon" src={`https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}.png`} />
          <div className="Temp">{Math.round(this.props.data.main.temp)} °C</div>
        </div>

        <div className="rightWeather">
          <div className="Pressure">Pressure: {this.props.data.main.pressure} hPa</div>
          <div className="Humidity">Humidity: {this.props.data.main.humidity}%</div>
          <div className="Clouds">Clouds: {this.props.data.weather[0].description}</div>
          <div className="Wind">Wind: {this.props.data.wind.speed} m/s</div>
          <div className="Coords">Coordinates: [{this.props.data.coord.lon}, {this.props.data.coord.lat}]</div>
        </div>

      </div>
    );
  }
}

export default WeatherData
