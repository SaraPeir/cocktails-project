import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './hero.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="navbar-whole-box">
          <div className="navbar-items-box">
            <div className="navbar-item">
            <Link to={`/alcolic`} style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}}>
              <p>Alcoholic cocktails</p>
            </Link>
            </div>


            <div className="navbar-item">
              <Link to={`/analcolic`} style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}>
              <p>Analcolic cocktails</p>
              </Link>
            </div>

          </div>
          <div className="navbar-items-box">
            <div className="navbar-item">
              <p>Random cocktail</p>
            </div>
            <div className="navbar-item">
              <p>Your personal cocktails</p>
            </div>
          </div>
        </div>
          <div className="text-container">
            <Link to={`/`} style={{textDecoration: 'none', color: 'white', textAlign: 'center'}}>
            The cocktails guide
            </Link>
          </div>
      </div>
    );
  }
}

export default Hero;
