import { createStore, combineReducers, applyMiddleware } from 'redux';
import geolocationReducer from './reducers/geolocationReducer';
import addedCitiesReducer from './reducers/addedCitiesReducer';
import thunk from "redux-thunk";

const LOCAL_STORAGE_KEY = 'added_cities';

const reducer = combineReducers({
geolocation : geolocationReducer,
fav : addedCitiesReducer,
})

const store = createStore (reducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...store.getState().fav.favorites.keys()]));
});

export default store;
