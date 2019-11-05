import React from 'react';
import './AddedCities.css';
import AddPanel from './AddPanel';
import { addCity, deleteCity, fetchAddedCitiesError } from './actions/addedCitiesAction';
import { fetchWeatherByCityName } from './actions/fetchWeatherByCityName';
import { connect } from "react-redux";

class AddedCities extends React.Component {
  render() {
    return (
      <AddPanel onSubmit={(e) => this.addNewCity(e)} />

    );
  }

  addNewCity(e) {
    e.preventDefault();
    const cityName = e.currentTarget.elements.cityName.value;
    this.props.addCity(cityName);
  }
}

function mapStateToProps(state) {
  return {
    added_cities: state.added_cities.cityName,
    error: state.added_cities.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (cityName) => {
      dispatch(addCity(cityName));
    },

    deleteCity: (cityName) => {
      dispatch(deleteCity(cityName));
    },

    fetchWeatherByCityName: (cityName) => {
      dispatch(fetchWeatherByCityName(cityName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedCities);
