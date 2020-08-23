import React from 'react';
 
import './style.css';
import List from './List/List';
import Sidebar from './Sidebar';

function Main() {
  const groupList = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
  
  return (
    <div className = "main">
      <Sidebar></Sidebar>
      <List groupList={groupList}></List>
    </div>
  );
}

export default Main;
