import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCitiesAction';

export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`/weather?city=${cityName}`)
      .then(response => {
        response.json()
          .then(json => {
            if (!response.message) {
              dispatch(fetchAddedCitiesSuccess(json, cityName));
            } else {
              let error = json.message;
              dispatch(fetchAddedCitiesError(error, cityName));
            }
          });
      },
      error => dispatch(fetchAddedCitiesError(error, cityName)))
  }
}
