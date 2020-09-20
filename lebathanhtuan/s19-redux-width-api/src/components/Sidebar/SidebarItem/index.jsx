import React from 'react';
import { withRouter } from 'react-router';
import './styles.css';

function SidebarItem(props) {
  const { itemSidebar, history } = props;

  return (
    <div 
      className={`sidebar-item ${history.location.pathname === itemSidebar.path && 'sidebar-item-active'}`}
      onClick={() => history.push(itemSidebar.path)}
    >
      { itemSidebar.title }
    </div>
  );
}

export default withRouter(SidebarItem);
