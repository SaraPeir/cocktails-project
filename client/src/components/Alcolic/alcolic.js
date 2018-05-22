import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './alcolic.css';

class Alcolic extends Component {

  createOptions(){
    let array = this.props.array;
    if(array !== undefined && array.length > 0){
      let options = array[0][0].drinks.map( (x, index) => <option key={index}> {x.strDrink}</option>);

      return options;
      } else {
        alert('No results');
    }
  }

  render() {

    return (
      <div className="select-wrapper">
        <select>{this.createOptions()}</select>
      </div>
    );
  }
}

export default Alcolic;
