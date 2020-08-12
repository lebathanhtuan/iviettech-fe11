import React from 'react';
import Item from './Item'
import './styles.css';

function List(props) {
  const { dataList } = props

  return (
    <div className="list">
      <p className="title">List user</p>
      <div className="row px-3">
        <Item name={dataList[0].name} color={dataList[0].color} active >This is children</Item>
        <Item name={dataList[1].name} color={dataList[1].color} />
        <Item name={dataList[2].name} color={dataList[2].color} />
        <Item name={dataList[3].name} color={dataList[3].color} />
      </div>
    </div>
  );
}

export default List; 
