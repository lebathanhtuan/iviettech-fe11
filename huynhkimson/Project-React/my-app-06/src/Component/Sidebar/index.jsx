import React from 'react';
import './style.css';
import SidebarItem from '../../Component/SidebarItem/index';

function Sidebar(props) {
    const dataSidebar = [
        {
            title: 'Trang chủ',
            path: '/',
        },
        {
            title: 'Giới thiệu',
            path: '/gioithieu',
        },
        {
            title: 'Sản phẩm',
            path: '/sanpham',
        },
        {
            title: 'Thu cũ đổi mới',
            path: '/thucudoimoi',
        },
        {
            title: 'Mua trả góp',
            path: '/muatragop',
        },
        {
            title: 'TodoList',
            path: '/todolist',
        }
    ];


    const renderSidebarItem = () => {
        return dataSidebar.map((item, index) => {
            return (
                <SidebarItem
                    key={index}
                    menuItemSidebar={item}
                />
            );
        });
    };
    return (
        <>
            <div className="sidebar">
                <h5 className='content-sidebar'>Danh mục sản phẩm</h5>
                <div className="col">
                    {renderSidebarItem()}
                </div>
            </div>
        </>
    );
}
export default Sidebar;