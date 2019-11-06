import React from "react";
import { connect } from "react-redux";
import AddPanel from '../AddPanel/AddPanel';
import WeatherData from '../WeatherData/WeatherData';
import { addCity, deleteCity } from '../../actions/addedCitiesAction';
import { fetchWeatherByCityName } from '../../actions/fetchWeatherByCityName';
import "./AddedCities.css";


class AddedCities extends React.Component {
  render() {
    return (
      <div className="favorites">
        <AddPanel onSubmit={(e) => this.addNewCity(e)} />
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="forecasts">
          {
            [...this.props.favorites.entries()].map((entry) => {
              return (
                <WeatherData
                  key={entry[0]}
                  onFetch={() => this.props.fetchWeatherByCityName(entry[0])}
                  onDelete={() => this.props.deleteCity(entry[0])}
                  data={entry[1]}/>
              );
            })
          }
        </div>
      </div>
    );
  }

  addNewCity(e) {
    e.preventDefault();
    this.props.addCity(e.currentTarget.elements.cityName.value);
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
