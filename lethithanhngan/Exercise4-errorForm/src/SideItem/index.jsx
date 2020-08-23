import React, {useState} from 'react';
import './styles.css';


function SideItem(props) {
  console.log('Log : SideItem -> props', props);
  
  const {name,sideIndex,activeIndex,setSidebarActiveIndex} =props;
 
  

 /* const itemStyle ={
    backgroundColor: color,
    height: 10,
  };*/
  
 
 // let itemClass =active ? 'itemm itemm-active' : 'itemm';
 

  return (
    
    <div className={`side-item ${activeIndex === sideIndex ? 'side-active' :''}`}
         onClick={() =>setSidebarActiveIndex(sideIndex)}
    > 
        {name}
    </div>
    
  )
}

export default SideItem;
