import React from 'react';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Products from '../Products';
import Contact from '../Contact';
import './styles.css';

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Main;
