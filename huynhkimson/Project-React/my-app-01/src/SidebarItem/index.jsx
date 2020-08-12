import React from 'react';
import './style.css';

function SidebarItem(props) {
    const { menuItemSidebar } = props;
    const itemColorStyle = {
        padding: 10
    }
    return (
        <div className="row hover" style={itemColorStyle}>
            <div>{menuItemSidebar}</div>
        </div>
    );
}
export default SidebarItem;