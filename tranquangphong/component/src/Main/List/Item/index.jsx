import React from 'react';
import './styles.css';

function Item(props) {
  const { name, color, active } = props;

  const styleItem = {
    height: 250,
    backgroundColor: color
  }

  const styleContent = {
    padding: 12,
    textAlign: 'center'
  }

  let itemClass = active ? 'item-active' : '';
  
  return (
    <div className="col-3" >
      <div className={`${itemClass} item`}>
        <div style={styleItem}></div>
        <div style={styleContent}>{name}</div>
      </div>
    </div>
  );
}

export default Item;
