export function loadGeolocation(coords) {
  return {
    type: 'LOAD_GEOLOCATION',
    payload: coords
  }
}

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en`)
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

function fetchGeolocationSuccess(response) {
  return {
    type: 'FETCH_GEOLOCATION_SUCCESS',
    payload: response
  }
}

export function fetchGeolocationError(error) {
  return {
    type: 'FETCH_GEOLOCATION_ERROR',
    payload: error
  }
}
