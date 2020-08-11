import React from 'react';
import './style.css';
import SidebarItem from '../SidebarItem/index';

function Sidebar(){
    return (
        <div>
                <div className= "sidebar">
                    <h3>Sidebar</h3>
                    <div className="col">    
                        <SidebarItem menu="Iphone/11 Pro/11 Pro Max" />
                        <SidebarItem menu="SamSung/Note 9/ S10" />
                        <SidebarItem menu="Thu cũ đổi mới" />
                        <SidebarItem menu="Mua trả góp" />
                    </div>
                </div>
                
        </div>
    );
}
export default Sidebar;