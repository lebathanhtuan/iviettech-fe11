import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

function Sidebar() {
  const [ sidebarActiveIndex, setSidebarActiveIndex ] = useState(0);

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
    return sidebarData.map((sidebarItem, sidebarIndex) => {
      return (
        <SidebarItem
          key={ sidebarIndex }
          itemName={ sidebarItem.title }
          sidebarIndex={ sidebarIndex }
          sidebarActiveIndex={ sidebarActiveIndex }
          setSidebarActiveIndex={ setSidebarActiveIndex }
        />
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
