import { createStore, combineReducers, applyMiddleware } from 'redux';
import geolocationReducer from './reducers/geolocationReducer';
import addedCitiesReducer from './reducers/addedCitiesReducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
geolocation : geolocationReducer,
added_cities : addedCitiesReducer,
})

const store = createStore (reducer, applyMiddleware(thunk));

export default store;
