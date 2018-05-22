import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './alcolic.css';

class Alcolic extends Component {

  createGinOptions(){
    let array = this.props.array;
    if(array !== undefined && array.length > 0){
      let options = array[0][1].drinks.map( (x, index) => <option key={index}> {x.strDrink}</option>);

      return options;
      } else {
        alert('No results');
    }
  }

  createVodkaOptions(){
    let array = this.props.array;
    if(array !== undefined && array.length > 0){
      let options = array[0][2].drinks.map( (x, index) => <option key={index}> {x.strDrink}</option>);

      return options;
      } else {
        alert('No results');
    }
  }

  createRhumOptions(){
    let array = this.props.array;
    if(array !== undefined && array.length > 0){
      let options = array[0][3].map( (x, index) => <option key={index}> {x.name}</option>);

      return options;
      } else {
        alert('No results');
    }
  }

  render() {

    return (
    <div className="component-wrapper">
      <div className="select-wrapper">
        <h1>Gin cocktails</h1>
        <select> <option>Gin cocktails</option> {this.createGinOptions()}</select>
        <h1>Vodka cocktails</h1>
        <select><option>Vodka cocktails</option>{this.createVodkaOptions()}</select>
        <h1>Rhum cocktails</h1>
        <select><option>Rhum cocktails</option>{this.createRhumOptions()}</select>
      </div>
      <div className="cocktail-wrapper">
          Hola
      </div>
    </div>
    );
  }
}

export default Alcolic;
