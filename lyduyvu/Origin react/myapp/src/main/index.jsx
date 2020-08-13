import React from 'react';
import './style.css';
import List from './list/index';
import Sidebar from './sidebar';

function Main() {
  
    const dataList=[
      {
        color: '#17fc03',
        name:'Vux',
      },
      
      {
        color: '#5a03fc',
        name:'QNG',
      },
      {
        color: '#751b48',
        name:'ABC',
      },

    ];
  return (
    <div className="main">
        <Sidebar />
        <List dataList= {dataList}/>
        
    </div>
    
  );
}

export default Main;