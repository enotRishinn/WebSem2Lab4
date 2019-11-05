import React from "react";
import { connect } from "react-redux";

import AddPanel from '../AddPanel/AddPanel';
import Weather from '../Weather/Weather';
import { addCity, deleteCity } from '../../actions/addedCitiesAction';
import { fetchWeatherByCityName } from '../../actions/fetchWeatherByCityName';

import "./AddedCities.css";


class AddedCities extends React.Component {
  render() {
    return (
      <div className="favorites">
        <AddPanel onSubmit={(e) => this.handleAddFavorite(e)} />
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="forecasts">
          {
            [...this.props.favorites.entries()].map((entry) => {
              return (
                <Weather
                  key={entry[0]}
                  onFetch={() => this.props.fetchWeatherByCityName(entry[0])}
                  onDelete={() => this.props.deleteCity(entry[0])}
                  forecast={entry[1]} />
              );
            })
          }
        </div>
      </div>
    );
  }

  handleAddFavorite(e) {
    e.preventDefault();
    const cityName = e.currentTarget.elements.cityName.value;
    this.props.addCity(cityName);
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.fav.favorites,
    error: state.fav.error
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
