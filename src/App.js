import './App.css';

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>);
}



export default App;