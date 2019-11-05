import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper">
        <div class="loader-circle"></div>
        <div class="loader-bottom">Please wait, weather is loading...</div>
      </div>
    );
  }
}

export default Loader;
