import getFavoritesFromStorage from "../LocalStorage";
import { extractWeatherParams } from "../api";

const initialState = {
  favorites: getFavoritesFromStorage()
};

export default function favReducer(state = initialState, action) {
  state = {
    ...state,
    error: false,
    favorites: new Map(state.favorites)
  };

  switch (action.type) {
    case 'ADD_CITY':
      if (!state.favorites.has(action.payload))
        state.favorites.set(action.payload);
      break;
    case 'DELETE_CITY':
      state.favorites.delete(action.payload);
      break;
    case 'FETCH_ADDED_CITY_SUCCESS':
      const forecast = extractWeatherParams(action.payload.response);
      state.favorites.delete(action.payload.cityName);
      state.favorites.set(forecast.cityName, forecast);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload.error;
      state.favorites.delete(action.payload.cityName);
      break;
    default:
      break;
  }
  return state;
}
