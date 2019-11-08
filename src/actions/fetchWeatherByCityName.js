import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCitiesAction';

export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e972dcd233bab1ebce419c370711921f&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
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
