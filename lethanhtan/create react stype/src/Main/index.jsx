import React from 'react';

import './main.css';
import Siderbar from './Siderbar';
import List from './List'

function Main() {
    const lisContentCss = {
        color: 'red',
    }
    return (
        <div className="main">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-6 sider">
                        <Siderbar />
                    </div>
                    <div className="col-md-6">
                        <h3 style={lisContentCss}>List Item</h3>

                        {/* <List/> */}

                        <List />
                    </div>
                    {/* <div className="col-md-3">
                                1
                            </div>
                            <div className="col-md-3">
                                1
                            </div>
                            <div className="col-md-3">
                                1
                            </div> */}

                </div>
            </div>
        </div>


    );
}

export default Main;
