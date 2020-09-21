import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom'

function SidebarItem(props) {
    const { menuItemSidebar, history } = props;

    const itemColorStyle = {
        padding: 10,
        marginTop: 15
    }
    return (
        <div style={itemColorStyle} className={` row hover sidebar-item ${history.location.pathname === menuItemSidebar.path ? 'sidebar-active' : ''}`}
            // onClick={() => setSidebarActiveIndex(sidebarIndex)}
            onClick={() => history.push(menuItemSidebar.path)}
        >
            {menuItemSidebar.title}
        </div>
    );
}
export default withRouter(SidebarItem);