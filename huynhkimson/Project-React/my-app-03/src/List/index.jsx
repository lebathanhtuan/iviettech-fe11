import React, { useState } from 'react';
import './style.css';
import SignUp from '../SignUp/index';

function List(props) {
    const listStyle = {
        padding: 16,
    }

    return (
        <div className="list">
            <div style={listStyle}>
                <SignUp />
            </div>
        </div>
    );
}

export default List;