export function setWeatherParamsFromResponse(response) {
  const {
    coord: coords,
    weather: [{ icon, description }],
    main: {
      temp: temperature,
      pressure,
      humidity
    },
    wind: {
      speed: windSpeed
    },
    name: cityName
  } = response;

  return {
    cityName,
    temperature,
    pressure,
    humidity,
    windSpeed,
    icon,
    description,
    coords
  }
}
