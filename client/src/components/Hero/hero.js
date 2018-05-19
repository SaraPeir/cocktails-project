import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './hero.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class RouteComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="navbar-whole-box">
          <div className="navbar-items-box">
            <div className="navbar-item">
            <Link to={`/`} style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}}>
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
              <p>Italian cocktails</p>
            </div>
          </div>
        </div>
          <div className="text-container">
            The cocktails guide
          </div>
      </div>
    );
  }
}

export default RouteComponent;
