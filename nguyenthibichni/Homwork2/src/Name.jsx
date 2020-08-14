import React from 'react';
import './Name.css';


function Name(props) {
console.log("Name -> props", props)
  
    const name = props.name;
    const adr = props.adr;
  return (
    <div className="name">
       {name} hiện đang sống tại {adr}
    </div>
  );
}

export default Name;
