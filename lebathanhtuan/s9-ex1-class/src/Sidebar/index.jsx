import React, { useState } from 'react';
import SidebarItem from '../SidebarItem'
import './styles.css';

function Sidebar() {
  const [sidebarActiveIndex, setSidebarActiveIndex] = useState(0);

  const sidebarData = [
    {
      name: 'Trang chủ',
    },
    {
      name: 'Danh sách User',
    },
    {
      name: 'Danh sách Admin',
    },
    {
      name: 'Cài đặt',
    },
  ];
  const renderSidebarItem = () => {
    return sidebarData.map((sidebarItem, sidebarIndex) => {
      return (
        <SidebarItem
          key={sidebarIndex}
          sidebarIndex={sidebarIndex}
          activeIndex={sidebarActiveIndex}
          setSidebarActiveIndex={setSidebarActiveIndex}
          name={sidebarItem.name}
        />
      )
    })
  }
  return (
    <div className="sidebar-container">
      {renderSidebarItem()}
    </div>
  );
}

export default Sidebar;
