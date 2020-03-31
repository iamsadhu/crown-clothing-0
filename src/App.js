import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
