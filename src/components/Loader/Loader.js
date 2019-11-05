import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="loader-circle"></div>
        <div className="loader-bottom">Please wait, weather is loading...</div>
      </div>
    );
  }
}

export default Loader;
