import React from 'react';
import './style.css';
import history from '../history'

function Header() {
    return (
        <div className="header">
            <div>Brand Name</div>
            <div className="menu">
                <div className="menu-item">Trang chủ</div>
                <div className="menu-item">Giới thiệu</div>
                <div className="menu-item">Sản phẩm</div>
                <div className="menu-item">Liên hệ</div>
                <div className="menu-item">Tin tức</div>
            </div>
            <button className="btn-login"
                onClick={() => history.push('/login')}
            >LOGIN</button>
        </div>
    );
}
export default Header;