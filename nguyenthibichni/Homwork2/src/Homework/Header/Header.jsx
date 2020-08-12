import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="header">
       <div>Branch Name</div>
       <div className="menu">
          <div className="menu-items">Trang chủ</div>
          <div className="menu-items">Giới thiệu</div>
       </div>
       <div>Bích Ni</div>
    </div>
  );
}

export default Header;
