import React from 'react';
import './style.css';

function Header(){
    return (
        <div className= "header">
                <div>Brand Name</div>
                <div className="menu">
                    <div className="menu-item">Trang chủ</div>
                    <div className="menu-item">Giới thiệu</div>
                    <div className="menu-item">Sản phẩm</div>
                    <div className="menu-item">Liên hệ</div>
                    <div className="menu-item">Tin tức</div>
                </div>
                <div>Huỳnh Kim Sơn</div>
                
        </div>
        
    );
}
export default Header;