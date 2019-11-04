export function loadGeolocation(coords) {
  return {
    type: 'LOAD_GEOLOCATION',
    payload: coords
  }
}

export function fetchGeolocationSuccess(response) {
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
