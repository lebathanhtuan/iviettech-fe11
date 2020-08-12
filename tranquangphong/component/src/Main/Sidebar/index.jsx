import React from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

function Sidebar() {
  return (
    <div className="container-sidebar">
      <SidebarItem itemName="Home" />
      <SidebarItem itemName="About us" />
      <SidebarItem itemName="Products" />
      <SidebarItem itemName="Contact" />
    </div>
  );
}

export default Sidebar;
