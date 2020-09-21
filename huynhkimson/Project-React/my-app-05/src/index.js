import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import DefaultLayout from './layout/DefaultLayout';
import LoginLayout from './layout/LoginLayout';
import SignUpLayout from './layout/SignUpLayout';

import Home from './pages/Home/index';
import Products from './pages/Products/index';
import ProductDetail from './pages/Products/ProductDetail/index';
import TodoList from './pages/TodoList/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';

import myReducer from './redux/reducers/index';
import mySaga from './redux/sagas/index';

import history from './util/history'

import * as serviceWorker from './serviceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore( myReducer, applyMiddleware(...[sagaMiddleware, logger]));
sagaMiddleware.run(mySaga)

console.log('Log: myStore', myStore.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <Router history={history} >
        <Switch>
          <LoginLayout exact path="/login" component={Login} />
          <SignUpLayout exact path="/signup" component={SignUp} />

          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/sanpham" component={Products} />
          <DefaultLayout exact path="/sanpham/:id" component={ProductDetail} />
          <DefaultLayout exact path="/todolist" component={TodoList} />

        </Switch>
      </Router>
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
