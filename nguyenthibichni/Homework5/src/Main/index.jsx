import React from 'react';
import Introduce from '../Introduce/index'
import Register from '../Register/index'
import './style.css'

function Main() {
    return (
        <div className="body">
            <div className="form">
            <div className="introduce">
                <Introduce />
            </div>
            <div className="register">
                <Register />
            </div>
        </div>
        </div>
    )
}
export default Main;
