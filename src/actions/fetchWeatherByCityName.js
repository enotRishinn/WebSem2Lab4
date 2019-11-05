import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCititesAction';

export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchAddedCitiesSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchAddedCitiesError(error));
            }
          });
      },
      error => dispatch(fetchAddedCitiesError(error)))
  }
}
