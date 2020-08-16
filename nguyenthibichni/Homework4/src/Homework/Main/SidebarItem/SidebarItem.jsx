import React from 'react';
import './SidebarItem.css'

function SidebarItem(props) {
    const { name,
        sidebarIndex,
        activeIndex,
        setSidebarActiveIndex
    } = props;
    return (
        <div className={`sidebar-item ${activeIndex === sidebarIndex ? 'sidebar-active' : ''}`}
            onClick={() => setSidebarActiveIndex(sidebarIndex)}
        >
            {name}
        </div>
    )
}
export default SidebarItem;