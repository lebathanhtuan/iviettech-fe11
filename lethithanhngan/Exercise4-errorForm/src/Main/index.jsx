import React from 'react';
import './styles.css';
import SideBar from '../SideBar';
import List from '../List';
function Main() {
 const dataList=[
   {
     color: 'blue',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'purple',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'yellow',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'green',
     name: 'Trần Văn A',
   }
 ];
 const groupList=[
  {
    nameG: 'Group Name 1',
    description: 'Group Description',
    members: [
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
    ],
  },
  {
    nameG: 'Group Name 2',
    description: 'Group Description',
    members: [
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
    ],
  },
  {
    nameG: 'Group Name 3',
    description: 'Group Description',
    members: [
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
      { image: 'https://via.placeholder.com/50' },
    ],
  }
];
  return (
    <div className="main">
      <SideBar />
      <List groupList={groupList} />
    </div>
  );
}

export default Main;
