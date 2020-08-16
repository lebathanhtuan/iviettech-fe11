import React from 'react';
import './styte.css';
function Item(props) {
let {color, name, active}= props;
const colorBackground ={
   height: '200px',
   background : color,
}
const isActiveClass= active ? 'item-active' : ' colorBorder';
return(
   <div className="col-md-3">
      <div className={`row ${isActiveClass}`}>
         <div className="col-md-12" style={colorBackground} />
         <div className="col-md-12">
            {color} + {name}
         </div>
      </div>
         
      </div>
);
}
export default Item;
