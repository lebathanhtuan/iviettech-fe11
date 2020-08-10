import React from 'react';
import './Items.css';



function Items(props) {
console.log("Items -> props", props)
  
    const name = props.name;
    const adr = props.adr;
    const color = props.color;
    //Cách 1
    /*const itemsColor= {
      border: '1px solid #00334d',
      //width: '50%',
      padding: '5px',
      margin: '10px auto',
      width: 'calc(100vh - 50px)',
      backgroundColor:color,
    }*/

    //Cách 2

    let itemsColor= '';
    if(color){
      itemsColor = 'items items-Class';
    }
    else{
      itemsColor = 'items';}
    
    
  return (
    //Cách 1
    /*<div style={itemsColor}>
       {name} - {adr}
    </div>*/
    
    //Cách 2
    <div className={itemsColor}>
       {name} - {adr}
    </div>

    //Bootstrap
  );

}

export default Items;