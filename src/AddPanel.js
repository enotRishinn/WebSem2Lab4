import React from 'react';
import './AddPanel.css';

class AddPanel extends React.Component {
  render() {
    return (
      <div className="CitiesPanel">
        <div className="CitiesText">Favorites</div>
        <form className="add_city" onSubmit={(e) => props.addCity(e)}>
          <input className="CiteesInput" type="text" name="cityName" placeholder="City name" required />
          <input className="CitiesButton" type="submit" value="Add city"/>
        </form>
      </div>
    );
  }
}

export default AddPanel;
