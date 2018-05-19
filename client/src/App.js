import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
// import RouteComponent from './components/RouteComponent/routeComponent';
import Alcolic from './components/alcolic';
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
    const data = this.state.data;
  const teamDailyData = this.state.teamDailyData;
    return (
      <div>
      <Hero />
      <Switch>
        <Route exact path='/' component={ Alcolic } />
          <Route path='/analcolic' component={ Analcolic } />
      </Switch>

      </div>
    );
}

}

//  <Route path='/analcolic' render={(props) => <Analcolic {...props} listData={data}/>}/>
// <Route path='/scheduled' render={(props) => <ScheduledMatchs {...props} matchsDay={data} matchsDayList={data} teamsNamesArray = {data} matchsTeam = {teamDailyData} onSelectTeam={this.selectTeam} onSelectValue = {this.state.selectValue} />} />

export default App

//Render con redux
// render () {
//   return (
//     <Provider store={ store }>
//       <div className="App">
//         <Hero />
//         <Customers/>
//       </div>
//     </Provider>
//   )
// }
