import React from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

function Sidebar() {
  const sidebarData = [
    { 
      title: 'Home',
      path: '/',
    },
    { 
      title: 'Todo List',
      path: '/todo-list',
    },
    { 
      title: 'Products',
      path: '/products',
    },
    { 
      title: 'Contact',
      path: '/contact',
    }
  ];

  const sidebarMap = () => {
    return sidebarData.map((item, index) => {
      return (
        <SidebarItem key={index} itemSidebar={item} />
      );
    });
  }
  
  return (
    <div className="container-sidebar">
      {sidebarMap()}
    </div>
  );
}

export default Sidebar;
