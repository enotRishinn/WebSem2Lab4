export default function addedCitiesReducer(state, action) {
  state = {
    ...state,
    error: false
  };

  switch (action.type) {
    case 'SET_CITIES':
      if (!state.added_cities) state = {
        ...state,
        added_cities: new Map()
      };
      action.payload.forEach(function(city){
        state.added_cities.set(city);
      })
      console.log('reducer', state.added_cities);
      break;
    case 'FETCH_ADDED_CITY_SUCCESS':
      state.added_cities.delete(action.payload.cityName);
      state.added_cities.set(action.payload.response.name, action.payload.response);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload.error;
      state.added_cities.delete(action.payload.cityName);
      break;
    default:
      break;
  }
  return state;
}
