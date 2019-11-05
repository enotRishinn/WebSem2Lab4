import React from 'react';
import './AddedCities.css';
import AddPanel from './AddPanel';

class AddedCities extends React.Component {
  render() {
    return (
      <AddPanel/>
    );
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
      dispatch(addFavorite(cityName));
    },

    deleteCity: (cityName) => {
      dispatch(deleteFavorite(cityName));
    },

    fetchWeatherByCityName: (cityName) => {
      dispatch(fetchWeatherByCityName(cityName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(added_cities);
