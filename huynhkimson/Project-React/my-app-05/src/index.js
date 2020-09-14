import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import './index.css';

import DefaultLayout from './layout/DefaultLayout';
import LoginLayout from './layout/LoginLayout'
import SignUpLayout from './layout/SignUpLayout'
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Login from './Login/index';
import SignUp from './SignUp/index';


import * as serviceWorker from './serviceWorker';
import history from './history'


ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <Switch>
        <LoginLayout exact path="/login" component={Login} />
        <SignUpLayout exact path="/signup" component={SignUp} />

        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/sanpham" component={Products} />
        <DefaultLayout exact path="/sanpham/:id" component={ProductDetail} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
