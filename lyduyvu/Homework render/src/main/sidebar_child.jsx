import React from 'react';
import './style.css';
function SidebarC(props) {
    const name  = props.name;
   
    
  return (
    <div className="side">
      <div>
            {name}
      </div>
  
    </div>
  );
}

export default SidebarC;