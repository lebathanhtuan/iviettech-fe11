import React from 'react';
import './siderbar.css'


function SiderbarItem(props) {
    const { li } = props
    return (
        <div className="siderbarItem">
            <ul>
                <li>{li}</li>
            </ul>
        </div>
    );
}

export default SiderbarItem;
