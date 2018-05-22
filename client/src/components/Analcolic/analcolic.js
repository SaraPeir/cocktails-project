import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './analcolic.css';

class Analcolic extends Component {

  // createOptions(){
  //   let array = this.props.array;
  //   if(array !== undefined){
  //     let options = array[0][1].drinks.map((index, x) => <option key={index}>{x.strDrink}</option>);
  //     return options;
  //     } else {
  //       alert('No results');
  //   }
  // }

  createOptions(){
    let array = this.props.array;
    if(array !== undefined){
      let options = array[0][1].map((index, x) => <option key={index}>{x.strDrink}</option>);
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

export default Analcolic;


// var Answer = props =>
//     <select>{props.data.map(x => <option>{x}</option>)}</select>;
