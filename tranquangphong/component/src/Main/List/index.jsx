import React from 'react';
import Item from './Item'
import './styles.css';
import { render } from '@testing-library/react';

function List(props) {
  const { dataList } = props;

  // const testMap = () => {
  //   const arr = [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}];
  //   const result = arr.map((item, index) => {
  //   console.log("testMap -> item", item)
  //     return item.key;
  //   })
  //   console.log("testMap -> result", result)
  // }

  // const testMap2 = () => {
  //   const arr = ['a', 'b', 'c', 'd'];
  //   const result = arr.map((item, index) => {
  //   console.log("testMap -> item", item)
  //     return { key: item };
  //   })
  //   console.log("testMap -> result", result)
  // }

  // testMap();
  // testMap2();

  const renderItems = () => {
    return dataList.map((item, index) => {
      return (
        <Item key={index} name={item.name} color={item.color} active={index === 0} />
      );
    });
  }


  return (
    <div className="list">
      <p className="title">List user</p>
      <div className="row px-3">
        {renderItems()}
      </div>
    </div>
  );
}

export default List; 
