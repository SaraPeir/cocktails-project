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
          <div className ="title">Alcoholic drinks</div>
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
                <select className="select-style" value={this.props.gSelectValue} onChange={this.props.onChangeGinSelectValue}>
                  <option>Gin cocktails</option>
                  {this.createGinOptions()}
                </select>
                <select className="select-style" value={this.props.vSelectValue} onChange={this.props.onChangeVodkaSelectValue}>
                  <option>Vodka cocktails</option>
                  {this.createVodkaOptions()}
                </select>
                <select className="select-style" value={this.props.rSelectValue} onChange={this.props.onChangeRhumSelectValue}>
                  <option>Rhum cocktails</option>
                  {this.createRhumOptions()}
                </select>
            </div>


            <div className={`gin-cocktail-wrapper ${this.props.gDisplNone}`}>
                <div className="item-wrapper" id="type1">
                  {this.props.ginDrinkName}
                </div>
                <div className="item-wrapper">
                  <img className="drink-img" src={`${this.props.gDrinkPhoto}`} alt="" />
                </div>
                <div className="item-wrapper" id="type3">
                  <p>{this.props.gDrinkIngredients}</p>
                </div>
                <div className="item-wrapper" id="type4">
                  ( {this.props.gDrinkMeasures} )
                </div>
                <div className="item-wrapper" id="type2">
                  {this.props.gDrinkRecipe}
                </div>
            </div>

            <div className={`vodka-cocktail-wrapper ${this.props.vDisplNone}`}>
                <div className="item-wrapper" id="type1">
                  {this.props.vodkaDrinkName}
                </div>
                <div className="item-wrapper">
                  <img className="drink-img" src={`${this.props.vDrinkPhoto}`} alt="" />
                </div>
                <div className="item-wrapper" id="type3">
                  <p>{this.props.vDrinkIngredients}</p>
                </div>
                <div className="item-wrapper" id="type4">
                  ( {this.props.vDrinkMeasures} )
                </div>
                <div className="item-wrapper" id="type2">
                  {this.props.vDrinkRecipe}
                </div>
            </div>

            <div className={`rhum-cocktail-wrapper ${this.props.rDisplNone}`}>
                <div className="item-wrapper" id="type1">
                  {this.props.rhumDrinkName}
                </div>
                <div className="item-wrapper">
                  <img height="300px"  src={`${this.props.rDrinkPhoto}`} alt="" />
                </div>
                <div className="item-wrapper" id="type3">
                  <p>{this.props.rDrinkIngredients}</p>
                </div>
                <div className="item-wrapper" id="type2">
                  {this.props.rDrinkRecipe}
                </div>
            </div>
      </div>




</div>
    );
  }
}

export default Alcolic;


// <div className={`gin-cocktail-wrapper ${this.props.gDisplNone}`}>
//     {this.props.ginDrinkName}
// </div>
//
//
//
// <div className={`rhum-cocktail-wrapper ${this.props.rDisplNone}`}>
//
//     {this.props.rhumDrinkName}
//
// </div>
