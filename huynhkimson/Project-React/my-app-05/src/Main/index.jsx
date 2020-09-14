import React from 'react';
import Sidebar from '../Sidebar/index';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import ProductDetail from '../ProductDetail';
import './style.css';

function Main() {
    return (
        <>
            <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sanpham" component={Products} />
                    <Route exact path="/sanpham/:id" component={ProductDetail} />
                </Switch>
        </>
    );
}
export default Main;

