import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './routeComponent.css';

class RouteComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="navbar-whole-box">
          <div className="navbar-items-box">
            <div className="navbar-item">
              <p>Alcoholic cocktails</p>
            </div>
            <div className="navbar-item">
              <p>Analcolic cocktails</p>
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
            Alcolic cocktails
          </div>
      </div>
    );
  }
}

export default RouteComponent;
