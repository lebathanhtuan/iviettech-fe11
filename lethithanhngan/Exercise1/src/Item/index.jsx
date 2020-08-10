import React from 'react';
import './styles.css';


function Item(props) {
  console.log('Log : Item -> props', props);
  
  const {color, active} =props;
  

  const itemStyle ={
    backgroundColor: color,
    height: 200,
  };
  
 
  let itemClass ='';
  if(active){
    itemClass='item item-active';
  }
  else{
    itemClass='item';
  }

  return (
    <div className="col-md-3">
      <div className={itemClass}>
        <div style={itemStyle} />
        <div>{color}</div>
      </div>
    </div>
  );
}

export default Item;