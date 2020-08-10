import React from 'react';
import './styles.css';
import Item from '../Item'
function List(props) {
  console.log('Log : List -> props', props);

  const listStyle={padding:16,};

  return (
    <div className="list-container">
      <div style={listStyle}>
        <h3>List User</h3>
        <div className="row">
          <Item active color="blue" />
          <Item color ="purple" />
          <Item color="yellow" />
          <Item color="green" />
        </div>
      </div>
    </div>
  );
}

export default List;