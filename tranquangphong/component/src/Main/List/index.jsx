import React from 'react';
import Item from './Item'
import './styles.css';

function List() {
  return (
    <div className="list">
      <p className="title">List user</p>
      <div className="row">
        <Item name="Nguyễn Văn A" address="Đà Nẵng" color="red" active >This is children</Item>
        <Item name="Trần Quang B" address="Hà Nội" color="blue" />
        <Item name="Lê Nguyễn C" address="TP Hồ Chí Minh" color="green" />
        <Item name="Đỗ Trần D" address="Hải Phòng" color="grey" />
      </div>
    </div>
  );
}

export default List; 