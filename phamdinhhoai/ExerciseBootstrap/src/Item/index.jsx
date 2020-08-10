import React from 'react';

import './styles.css';

function Item(props) {
  const color = props.color;
  const active = props.active;
  const itemBackground = {
    height: '120px',
    backgroundColor: color,
  }
  
let itemClass = active ? 'item item-active' : 'item';
  
  return (
    // <div className={itemClass} >
    // <div  style={itemBackground} >   </div>
    // <div className="m-auto">{color}</div>
    //   </div>
    <div className="col-3">
      <div className={itemClass}>
        <div style={itemBackground}></div>
        <div className="p-2">
          {color}
        </div>
      </div>
    </div>
   
  );
}
export default Item;
