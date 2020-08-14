import React from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

function Sidebar() {
  const sidebarData = [
    { 
      title: 'Home'
    },
    { 
      title: 'About us'
    },
    { 
      title: 'Products'
    },
    { 
      title: 'Contact'
    }
  ];

  const sidebarMap = () => {
    return sidebarData.map((item, index) => {
      return (
        <SidebarItem key={index} itemName={item.title} />
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
