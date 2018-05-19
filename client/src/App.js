import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <Navbar />
          <Customers/>
        </div>
      </Provider>
    )
  }
}

export default App
