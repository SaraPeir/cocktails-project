import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Alcolic from './components/Alcolic/alcolic';
//import Analcolic from './components/Analcolic/analcolic';


//import Alcolic from './components/alcolic';
import Analcolic from './components/analcolic';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  data: []
  }
  }

    requestInfo() {
      var apiAlcoholicCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`).then(response => response.json());
      var apiGinCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`).then(response => response.json());
      var apiVodkaCocktails =  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`).then(response => response.json());
      var apiRhumCocktails =  fetch('/api/rhum').then(response => response.json());
      var apiNotAlcoholicCocktails = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`).then(response => response.json());
      var combinedData = [apiAlcoholicCocktails, apiGinCocktails, apiVodkaCocktails, apiRhumCocktails, apiNotAlcoholicCocktails];
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
        <div>
        <Hero />
        <Switch>
        <Route exact path='/' render={(props) => <Alcolic {...props} array={this.state.data}/>}/>
        <Route path='/analcolic' component={ Analcolic } />
        </Switch>
        </div>
      );
  }
  }



  export default App

  // <Route exact path='/' render={(props) => <Alcolic {...props} array={this.state.data}/>}/>
  // <Route path='/analcolic' render={(props) => <Analcolic {...props} array={this.state.data}/>}/>
  // <Route exact path='/' component={ Alcolic } />
  // <Route path='/analcolic' component={ Analcolic } />









//requestInfo() {
//     var apiAlcoholicCocktails =  fetch('/api/alcolic').then(response => response.json());
//     var apiNotAlcoholicCocktails = fetch('/api/analcolic').then(response => response.json());
//     var combinedData = [apiAlcoholicCocktails, apiNotAlcoholicCocktails];
//     Promise.all(combinedData).then(c => {
//     let allCocktailsData = this.state.data;
//     allCocktailsData.push(c);
//     this.setState({
//       data:allCocktailsData
//     });
//   })
//   }
//
//
//   componentDidMount(){
//   this.requestInfo();
//   }
//
//   render () {
//     return (
//       <div>
//       <Hero />
//       <Switch>
//       <Route exact path='/' render={(props) => <Alcolic {...props} array={this.state.data}/>}/>
//       <Route path='/analcolic' component={ Analcolic } />
//       </Switch>
//       </div>
//     );
// }
// }
