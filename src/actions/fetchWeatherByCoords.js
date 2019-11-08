import { fetchGeolocationSuccess, fetchGeolocationError } from './geolocationAction';

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=e972dcd233bab1ebce419c370711921f&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchGeolocationError(error));
            }
          });
      },
      error => dispatch(fetchGeolocationError(error)))
  }
}
