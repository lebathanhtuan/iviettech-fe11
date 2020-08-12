import React from 'react';
import Sidebar from '../Sidebar/index';
import List from '../List/index';
import './style.css';

function Main() {
    const datalist = [
        {
            color: 'gray',
            name: 'Huỳnh Kim Sơn'
        },
        {
            color: '#273660',
            name: 'Huỳnh Kim A'
        },
        {
            color: '#276660',
            name: 'Huỳnh Kim B'
        },
        {
            color: '#ff99ff',
            name: 'Huỳnh Kim C'
        }
    ];
    const dataSidebar = [
        {
            menuItemSidebar: 'Iphone/11 Pro/11 Pro Max'
        },
        {
            menuItemSidebar: 'SamSung/Note 9/ S10',
        },
        {
            menuItemSidebar: 'Thu cũ đổi mới',
        },
        {
            menuItemSidebar: 'Mua trả góp',
        }
    ];
    return (
        <div>
            <div className="container-fluid">
                <div className="row main">
                    <div className="col-md-3 sidebar">
                        <Sidebar dataSidebar={dataSidebar} />
                    </div>
                    <div className="col-md-9 list">
                        <List datalist={datalist} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;

