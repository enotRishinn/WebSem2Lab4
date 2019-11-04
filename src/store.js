import { createStore, combineReducers, applyMiddleware } from 'redux';
import geolocationReducer from './reducers/geolocationReducer';
import favoriteReducer from './reducers/favoriteReducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
geolocation : geolocationReducer,
favorites : favoriteReducer,
})

const store = createStore (reducer, applyMiddleware(thunk));

export default store;
