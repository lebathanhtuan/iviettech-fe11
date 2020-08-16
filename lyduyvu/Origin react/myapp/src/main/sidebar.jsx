import React from 'react';
import SidebarC from './sidebar_child';

import './style.css';
import Iteam from './list/Iteam';
function sidebar() {
    

  const sideBar = () =>{
   const arr = ['thu hai','thu ba','thu tu'];
   const dataMap = arr.map((item,index)=>{
     return <SidebarC name={item} />;
   });
   return dataMap;
 }
  return (
    <div className="sidebar">
    Sidebar
    <div>
      {/* <SidebarC name="Quang Ngai"></SidebarC>
      <SidebarC name="Quang Nam"></SidebarC>
      <SidebarC name="Quang Ngai"></SidebarC> */}
      {sideBar()}
    </div>
    </div>
  );
}

export default sidebar;