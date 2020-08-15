import React from 'react';
import Sidebar from './Sidebar';
import List from './List';
import './styles.css';

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
    <div className="main">
      <Sidebar />
      <List groupList={groupList} />
    </div>
  );
};

export default Main;
