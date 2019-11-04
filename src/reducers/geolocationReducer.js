export default function geolocationReducer (state, action) {
  state = {
    ...state,
    error: false
  };

  switch (action.type) {
    case 'LOAD_GEOLOCATION':
      return action.payload;
      break;
    case 'FETCH_GEOLOCATION_SUCCESS':
      return action.payload;
      break;
    case 'FETCH_GEOLOCATION_ERROR':
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}
}
