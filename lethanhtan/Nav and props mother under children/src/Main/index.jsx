import React from 'react';

import './main.css';
import Siderbar from './Siderbar';
import List from './List'

function Main() {
    const lisContentCss = {
        color: 'red',
    }
    const datalist = [
        {
            color: '#808080',
            name: 'thanh tan1'   
        },
        {
            color: '#808000',
            name: 'thanh tan2'   
        },
        {
            color: '#800080',
            name: 'thanh tan3'   
        },
        {
            color: '#008080',
            name: 'thanh tan4'   
        },
    ]
    return (
        <div className="main">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-3 sider">
                        <Siderbar />
                    </div>
                    <div className="col-md-9">
                        <h3 style={lisContentCss}>List Item</h3>

                        {/* <List/> */}

                        <List datalist={datalist} />
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
