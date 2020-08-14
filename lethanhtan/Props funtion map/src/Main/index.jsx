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
    ];
    const dataSiderBar=[
        {
            name:'trang chủ',
        },
        {
            name:'quản lí',
        },
        {
            name:'quản lí gì đó',
        },
        {
            name:'quản lí gì đó',
        }
    ]
    return (
        <div className="main row m-0">
            <div className="col-md-3 col-sm-3 col-3 sider">
                <Siderbar  dataSiderBar={dataSiderBar}/>
            </div>
            <div className="col-md-9 col-sm-9 col-9">
                <div className="p-3">
                    <h3 style={lisContentCss}>List Item</h3>

                    {/* <List/> */}

                    <List datalist={datalist} />
                </div>
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


    );
}

export default Main;
