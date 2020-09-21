import React from 'react';
import Sidebar from '../Component/Sidebar/index';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Products from '../pages/Products/index';
import TodoList from '../pages/TodoList/index';
// import ProductDetail from '../pages/ProductDetail/index';
import './style.css';

function Main() {
    return (
        <>
            <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sanpham" component={Products} />
                    <Route exact path="/todolist" component={TodoList} />
                    {/* <Route exact path="/sanpham/:id" component={ProductDetail} /> */}
                </Switch>
        </>
    );
}
export default Main;

