import React from 'react';
import './style.css';

function SidebarItem(props) {
    const { menuItemSidebar, sidebarIndex, activeIndex, setSidebarActiveIndex } = props;

    const itemColorStyle = {
        padding: 10,
        marginTop: 15
    }
    return (
        <div style={itemColorStyle} className={` row hover sidebar-item ${activeIndex === sidebarIndex ? 'sidebar-active' : ''}`}
            onClick={() => setSidebarActiveIndex(sidebarIndex)}>
            {menuItemSidebar}
        </div>
    );
}
export default SidebarItem;