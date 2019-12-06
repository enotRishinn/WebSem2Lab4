export function fetchAddedCitiesSuccess(response, cityName) {
  return {
    type: 'FETCH_ADDED_CITY_SUCCESS',
    payload: {
      response,
      cityName
    }
  }
}

export function fetchAddedCitiesError(error, cityName) {
  return {
    type: 'FETCH_ADDED_CITY_ERROR',
    payload: {
      error,
      cityName
    }
  }
}

export function setCities(cities) {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}
