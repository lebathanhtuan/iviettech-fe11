import React from 'react';

import './style.css';

function SidebarItem(props){
   const {
     name, 
     sidebarIndex,
     activeIndex,
     setSidebarActiveIndex
    } = props;
   
  return (
    <div className = {`sidebar ${activeIndex===sidebarIndex ? "sidebar-active" :""}`}
          onClick={() => setSidebarActiveIndex(sidebarIndex)}
    >

      <p>{name}</p>
    </div>
  );
}

export default SidebarItem;
