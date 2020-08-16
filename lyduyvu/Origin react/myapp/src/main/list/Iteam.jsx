import React from 'react';
import './style.css';
function Iteam(props) {
    const{name,color}  = props;
    const itemColorStyle={
      height: 200,
      backgroundColor: color,
      width:"100%",
    };
    // let itemClass="";
    // if(active){
    //   itemClass='item item-active';
    
    // }
    // else{
    //   itemClass='item';
    // }
    
  return (
    <div className="col-3">
      <div >
        <div style={itemColorStyle}></div>
        <div >{name}</div>
      </div>
  
    </div>
  );
}

export default Iteam;