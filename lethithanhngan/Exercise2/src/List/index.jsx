import React from 'react';
import './styles.css';
import Item from '../Item'
function List(props) {
  console.log('Log : List -> props', props);

  const listStyle={padding:16,};
  const {dataList}=props;
  return (
    <div className="list-container">
      <div style={listStyle}>
        <h3>List User</h3>
        <div className="row">
          <Item  color={dataList[0].color} name={dataList[0].name} />
          <Item color ={dataList[1].color} name={dataList[1].name} />
          <Item color={dataList[2].color} name={dataList[2].name} />
          <Item color={dataList[3].color} name={dataList[3].name} />
        </div>
      </div>
    </div>
  );
}

export default List;
