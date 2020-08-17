import React from 'react';
import './styles.css';

function SidebarItem(props) {
  const {
    itemName,
    sidebarIndex,
    sidebarActiveIndex,
    setSidebarActiveIndex
  } = props;
  
  return (
    <div
      className={`sidebar-item ${sidebarActiveIndex === sidebarIndex ? "sidebar-active" : ""}`}
      onClick={() => setSidebarActiveIndex(sidebarIndex)}>{ itemName }
    </div>
  );
}

export default SidebarItem;
