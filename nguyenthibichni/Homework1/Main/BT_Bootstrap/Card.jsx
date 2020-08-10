import React from 'react';
import './Card.css'


function Card(props) {
    const {color, active} = props;

    /*let itemsClass= '';
    if(active){
      itemsClass = 'item item-active';
    }
    else{
      itemsClass = 'item';
    }*/

    //let itemsClass= active ? 'item item-active' : 'item';
    
    const itemColor = {
        height: '200px',
        backgroundColor: color,
    }

  return (
            <div className="col-md-3">
                <div className={active ? 'item item-active' : 'item'}>
                    <div style={itemColor}/>
                    <div className="p-2">{color}</div>
                </div>
            </div>
  );
}

export default Card;
