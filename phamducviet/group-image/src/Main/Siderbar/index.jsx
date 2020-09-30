import React from 'react';
import SiderbarItem from './SiderbarItem';
import './style.css';

function Siderbar(){
   const renderSiderbarItem = () => {
     const arrSiderbar = [
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"}
      ];
      return arrSiderbar.map((item, index) => {
        return (
          <SiderbarItem key={index} name= {item.name}></SiderbarItem>
        );
     });
     
   }
  return (
    <div className = "siderbar">
    <div>
    {renderSiderbarItem()}
    
    </div>

    </div>
  );
}

export default Siderbar;
