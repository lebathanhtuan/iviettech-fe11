import React from 'react';
import './style.css';
import List from './list/index';
import Sidebar from './sidebar';

function Main() {
  
  const groupList = [
    {
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
      name: 'Group Name 2',
      description: 'Group Description',
      members: [
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
        { image: 'https://via.placeholder.com/100' },
      ],
    },
    {
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
        <List groupList= {groupList}/>
        
    </div>
    
  );
}

export default Main;