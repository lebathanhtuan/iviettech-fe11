import React from 'react';
import Sidebar from './Sidebar.jsx';
import List from './List.jsx';
function Main() {
  const dataList= [
    {color:'yellow', name:'Binh'},
    {color:'red', name: 'A'},
    {color:'black', name: 'B'},
    {color:'blue', name: 'C'},
 ];
 const sidebarList= [
   {list: 'Shortcuts'},
   {list: 'Event'},
   {list: 'About'},
   {list: 'Serveices'},
   {list: 'Contact'},
 ];
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
    <main>
      <div className="main1">
        <Sidebar sidebarList={sidebarList}  />
      </div>

      <div className="main2">
        <List groupList= {groupList} />
      </div>
    </main>
    
  );
}
export default Main;
