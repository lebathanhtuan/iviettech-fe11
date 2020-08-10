import React from 'react';
import Item from '../Item'
import './styles.css';

function List() {
  return (
    <div  className="list">
       <div className="list-content">
         <h3 className="p-3">List User</h3>
          <div className="row">
            <Item color="#fcba03" active/>
            <Item color="#00ffff"/>
            <Item color="#00ff00"/>
            <Item color="#0000cc"/>
          </div>
       </div>
      </div>
  );
}

export default List;

