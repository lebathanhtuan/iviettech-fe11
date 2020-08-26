import React from 'react';
import Sidebar from '../Sidebar';
import List from '../List';

import './styles.css';

function Main() {
  const groupList = [
    {
      id: 1,
      name: 'Group Name 1',
      description: 'Group Description',
      members: [
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
      ],
    },
    {
      id: 2,
      name: 'Group Name 2',
      description: 'Group Description',
      members: [
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
      ],
    },
    {
      id: 3,
      name: 'Group Name 3',
      description: 'Group Description',
      members: [
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
      ],
    }
  ];
  return (
    <div className="main">
      <Sidebar />
      <List groupList={groupList} />
    </div>
  );
}

export default Main;
