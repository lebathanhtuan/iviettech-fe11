import React from 'react';  
import SiderbarItem from './SiderbarItem';
function Siderbar() {
    return (
        <div className="siderbar">
            <SiderbarItem li="Home"/>
            <SiderbarItem li="About"/>
            <SiderbarItem li="Contact"/>
        </div>
    );
}

export default Siderbar;
