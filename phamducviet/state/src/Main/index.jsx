import React from 'react';
 
import './style.css';
import List from './List/List';
import Siderbar from './Siderbar';

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
  
  return (
    <div className = "main">
      <Siderbar></Siderbar>
      <List groupList={groupList}></List>
    </div>
  );
}

export default Main;
