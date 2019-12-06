import { fetchGeolocationSuccess, fetchGeolocationError, setLoadingTrue, setLoadingFalse } from './geolocationAction';

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`/weather/coordinates?lat=${coords.lat}&long=${coords.lon}`)
      .then(response => {
        response.json()
          .then(json => {
            if (!response.message) {
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchGeolocationError(error));
            }
          });
      },
      error => dispatch(fetchGeolocationError(error)));
  }
}
