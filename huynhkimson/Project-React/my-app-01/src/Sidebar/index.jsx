import React from 'react';
import './style.css';
import SidebarItem from '../SidebarItem/index';

function Sidebar(props) {
    const { dataSidebar } = props;
    const renderSidebarItem = () => {
        return dataSidebar.map((item, index) => {
            return (
                <SidebarItem key={index} menuItemSidebar={item.menuItemSidebar} />
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