import React from 'react';
import './main.css';
import List from './List'
import Siderbar from './Siderbar'
function Main() {
  const groupList = [
    {
      name: 'Group 1',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
      ],
    },
    {
      name: 'Group 2',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
      ],
    },
    {
      name: 'Group 3',
      description: 'asdosando asdpams dmsa asd a',
      members: [
        {
          name: 'Lê Bá Thanh Tuấn',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'ABC',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
        {
          name: 'XYZ',
          image: 'https://via.placeholder.com/100',
        },
      ],
    }
  ];

  const menu = [
    { name: "trang chủ" },
    { name: "trang chủ" },
    { name: "trang chủ" },
  ];
  const styleCss = {
    backgroundColor: "#C5F3F3",
  }
  return (
    <div className="main row">
      <div className="col-md-2" style={styleCss}>
        <Siderbar menu={menu} />
      </div>
      <div className="col-md-10 ">
        <h3>List Item</h3>
        <List groupList={groupList} />
      </div>
    </div>
  );
}

export default Main;
