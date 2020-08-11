import React from 'react';
import './style.css';

function SidebarItem(props){
    const {menu} = props;
    const itemColorStyle = {
        padding : 10
    }
    return (
    <div className="row hover" style={itemColorStyle}>
        <div>{menu}</div>
    </div>
    );
}
export default SidebarItem;