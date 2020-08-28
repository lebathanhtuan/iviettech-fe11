import React from 'react';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <div>Brand Name</div>
      <div className="header-menu">
        <div className="menu-item">Trang chủ</div>
        <div className="menu-item">Giới thiệu</div>
      </div>
      <div>Thanh Tuấn</div>
    </div>
  );
}

export default Header;
