import React from 'react';
import './siderbar.css'


function SiderbarItem(props) {
    const { name} = props
    return (
        <div className="siderbarItem">
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
}

export default SiderbarItem;
