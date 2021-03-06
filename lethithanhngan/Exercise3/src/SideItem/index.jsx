import React from 'react';
import './styles.css';


function SideItem(props) {
  console.log('Log : SideItem -> props', props);
  
  const {color, active,name} =props;
  

  const itemStyle ={
    backgroundColor: color,
    height: 10,
  };
  
 
  let itemClass =active ? 'itemm itemm-active' : 'itemm';
 

  return (
    
    <div className={itemClass}> 
        <div style={itemStyle} />
          <p>{name}</p>
    </div>
    
  );
}

export default SideItem;
