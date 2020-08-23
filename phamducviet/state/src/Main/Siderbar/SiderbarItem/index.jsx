import React from 'react';

import './style.css';

function SiderbarItem(props){
   const {
     name, 
     sidebarIndex,
     activeIndex,
     setSidebarActiveIndex
    } = props;
   
  return (
    <div className = {`siderbar ${activeIndex===sidebarIndex ? "sidebar-active" :""}`}
          onClick={() => setSidebarActiveIndex(sidebarIndex)}
    >

      <p>{name}</p>
    </div>
  );
}

export default SiderbarItem;
