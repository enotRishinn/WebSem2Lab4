import { fetchGeolocationSuccess, fetchGeolocationError } from './geolocationAction';


export function fetchWeatherByCoords(coords) {
  console.log(coords);
 return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=665c8e98e586f364800fd238b845d042&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              console.log(json);
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              console.log(error);
              dispatch(fetchGeolocationError(error));
            }
          });
      },
      error => dispatch(fetchGeolocationError(error)))
  }
}
