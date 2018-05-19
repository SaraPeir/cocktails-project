import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputSystem.css';

class inputSystem extends Component {
  render() {
    createOptions(X) {
      return <option>{X}</option>;
      };

    return (
      <div className="wrapper">
        <select>{this.props.data.map(createOptions)}</select>
      </div>
    );
  }
}

export default inputSystem;



   
