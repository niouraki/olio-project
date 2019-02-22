import React, { Component } from 'react';
import {  BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import List from './components/List'
import Product from './components/Product'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={List}/>
          <Route path="/:product_id" component={Product}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
