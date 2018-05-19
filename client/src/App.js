import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers';
import Header from './components/Header/header';
import RouteComponent from './components/RouteComponent/routeComponent';
import VisualizeArray from './components/visualizeArray';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  data: []
  }
  }


  requestInfo() {
    var apiAlcoholicCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`).then(response => response.json());
    var apiNotAlcoholicCocktails = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response => response.json());
    var combinedData = [apiAlcoholicCocktails, apiNotAlcoholicCocktails];
    Promise.all(combinedData).then(c => {
    let allCocktailsData = this.state.data;
    allCocktailsData.push(c);
    this.setState({
      data:allCocktailsData
    });
  })
  }

  componentDidMount(){
  this.requestInfo();
  }

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <RouteComponent />
          <Customers/>
        </div>
      </Provider>
    )
  }
}

export default App
