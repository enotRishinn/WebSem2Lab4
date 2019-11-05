import React from "react";

class WeatherData extends React.Component {
  render() {
    console.log(`https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}.png`);

    return (
      <div>
        <div>City: {this.props.data.name}</div>
        <div>Temperature: {this.props.data.main.temp}</div>
        <img src={`https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}.png`} />
        <div>Pressure: {this.props.data.main.pressure}</div>
        <div>Humidity: {this.props.data.main.humidity}</div>
        <div>Clouds: {this.props.data.clouds.all}</div>
        <div>Wind: {this.props.data.wind.speed}, {this.props.data.wind.deg}</div>
        <div>Coordinates: [{this.props.data.coord.lon}, {this.props.data.coord.lat}]</div>
      </div>
    );
  }
}

export default WeatherData
