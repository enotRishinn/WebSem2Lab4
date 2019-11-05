import React from 'react';
import './AddPanel.css';

class AddPanel extends React.Component {
  render() {
    return (
      <div className="FavoritesPanel">
        <div className="FavoritesText">Favorites</div>
        <form className="add-favorite">
          <input className="FavoritesInput" type="text" name="cityName" placeholder="City name" required />
          <input className="FavoritesButton" type="submit" value="Add city"/>
        </form>
      </div>
    );
  }
}

export default AddPanel;
