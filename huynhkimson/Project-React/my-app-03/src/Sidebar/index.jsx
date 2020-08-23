import React, { useState } from 'react';
import './style.css';
import SidebarItem from '../SidebarItem/index';

function Sidebar(props) {
    const { dataSidebar } = props;
    const [sidebarActiveIndex, setSidebarActiveIndex] = useState(0);

    const renderSidebarItem = () => {
        return dataSidebar.map((item, index) => {
            return (
                <SidebarItem
                    key={index}
                    sidebarIndex={index}
                    activeIndex={sidebarActiveIndex}
                    setSidebarActiveIndex={setSidebarActiveIndex}
                    menuItemSidebar={item.menuItemSidebar}
                />
            );
        });
    };
    return (
        <>
            <div className="sidebar">
                <h3>Sidebar</h3>
                <div className="col">
                    {renderSidebarItem()}
                </div>
            </div>
        </>
    );
}
export default Sidebar;