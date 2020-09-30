import React from 'react';

import './style.css';

function SiderbarItem(props){
   const name = props.name;
   
  return (
    <div className = "siderbar">
        <p> {name}</p>
    </div>
  );
}

export default SiderbarItem;
