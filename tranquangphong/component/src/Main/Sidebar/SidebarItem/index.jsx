import React from 'react';
import './styles.css';

function SidebarItem(props) {
  const { itemName } = props;

  return (
    <div className="sidebar-item">
      { itemName }
    </div>
  );
}

export default SidebarItem;
