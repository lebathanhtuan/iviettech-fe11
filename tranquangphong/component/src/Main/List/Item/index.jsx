import React from 'react';
import './styles.css';

function Item(props) {
  // const name = props.name;
  // const add = props.address;
  // const color = props.color;
  // const active = props.active;

  const {
    name,
    add,
    color,
    active 
  } = props;

  const styleItem = {
    height: 250,
    backgroundColor: color
  }

  const styleContent = {
    padding: 12,
    textAlign: 'center'
  }

  // let itemClass = active ? 'item item-active' : 'item';

  // let itemClass = '';
  // if (active) {
  //   itemClass = 'item item-active';
  // } else {
  //   itemClass = 'item';
  // }
  
  return (
    <div className="col-3" >
      {/* <div className={itemClass}> */}
      <div className={active ? 'item item-active' : 'item'}>
        <div style={styleItem}></div>
        <div style={styleContent}>{color}</div>
      </div>
    </div>

    // <div className={itemClass}>
    //   {name} - {add}
    // </div>
  );
}

export default Item;