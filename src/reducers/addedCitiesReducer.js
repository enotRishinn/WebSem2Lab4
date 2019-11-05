import { Actions } from "../actions/favActions";
import getFavoritesFromStorage from "../localStorage";
import { extractWeatherParams } from "../api";

const initialState = {
  added_cities: getAddedCitiesFromStorage()
};

export default function addedCitiesReducer(state = initialState, action) {
  state = {
    ...state,
    error: false,
    favorites: new Map(state.added.cities)
  };

  switch (action.type) {
    case 'ADD_CITY':
      if (!state.added_cities.has(action.payload))
        state.added_cities.set(action.payload);
      break;

    case 'DELETE_CITY':
      state.added_cities.delete(action.payload);
      break;

    case 'FETCH_ADDED_CITY_SUCCESS':
      state.added_cities.delete(action.payload.cityName);
      state.added_cities.set(forecast.cityName, action.payload.response);
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
