import React from 'react';
import './styles.css';


function Item(props) {
  console.log('Log : Item -> props', props);
  
  const {color, name} =props;
  

  const itemStyle ={
    backgroundColor: color,
    height: 200,
  };
  
 
 

  return (
    <div className="col-md-3">
      <div className="item">
        <div style={itemStyle} />
        <div>{name}</div>
      </div>
    </div>
  );
}

export default Item;
