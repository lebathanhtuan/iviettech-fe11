import React from 'react';
import Sidebar from '../Sidebar/index';
import List from '../List/index';
import './style.css';

function Main(){
    return (
        <div>
            <div className="container-fluid">
                <div className="row main">
                    <div className="col-md-4 sidebar">
                        <Sidebar/>
                    </div>

                    <div className="col-md-8 list">
                        <List/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Main;

