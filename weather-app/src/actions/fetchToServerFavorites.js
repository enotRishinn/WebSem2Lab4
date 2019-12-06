import { setCities } from './addedCitiesAction';

export function getAddedCities() {
  return function(dispatch) {
    fetch(`/favorites`).then(response => {
        response.json()
          .then(json => {
            let added_cities = []
            json.forEach(function(city){
              added_cities.push(city.city);
            });
            dispatch(setCities(added_cities));
          });
      }).catch(function(error){
        console.log(error);
      });
  }
}

export function addCityToBD(cityName) {
    fetch(`/favorites?city=${cityName}`, {
        method: 'POST'
    }).then(response => {
        response.json()
          .then(json => {
            console.log('add')
          });
      }).catch(function(error){
        console.log(error);
      });
      getAddedCities();
}

export function deleteCityFromBD(cityName) {
    fetch(`/favorites?city=${cityName}`, {
        method: 'DELETE',
    }).then(response => {
        response.json()
          .then(json => {
            console.log('delete')
          });
      }).catch(function(error){
        console.log(error);
      });
      getAddedCities();
}
