import React from 'react';
import history from '../../../history';
import './styles.css';

function SidebarItem(props) {
  const { itemSidebar } = props;

  return (
    <div 
      className="sidebar-item"
      onClick={() => history.push(itemSidebar.path)}
    >
      { itemSidebar.title }
    </div>
  );
}

export default SidebarItem;
