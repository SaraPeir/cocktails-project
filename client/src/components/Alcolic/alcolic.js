import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './alcolic.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
<div>

<div className="alcolic-page-background">
</div>


<div className="backhome-whole-box">
  <div className="backhome-items-box">
    <div className="backhome-item">
    <Link to={`/`} style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}}>
      <p>Home</p>
    </Link>
    </div>
</div>
</div>





    <div className="component-wrapper">

      <div className="select-wrapper">
      <Link to={`/`} style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}}>
        <button className="to-home-button"> Home </button>
      </Link>
        <select className="select-style" value={this.props.gSelectValue} onChange={this.props.onChangeGinSelectValue}> <option>Gin cocktails</option> {this.createGinOptions()}</select>
        <select className="select-style" value={this.props.vSelectValue} onChange={this.props.onChangeVodkaSelectValue}><option>Vodka cocktails</option>{this.createVodkaOptions()}</select>
        <select className="select-style" value={this.props.rSelectValue} onChange={this.props.onChangeRhumSelectValue}><option>Rhum cocktails</option>{this.createRhumOptions()}</select>
      </div>
      <div className="cocktail-wrapper">
          Hola
      </div>
</div>



</div>
    );
  }
}

export default Alcolic;
