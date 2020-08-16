import React from 'react';
import './styte.css';
function Header() {
  return (
    <div className="header">
       <div>Branch Name</div>
       <div className="menu">
          <div className="menu-items">Trang chủ</div>
          <div className="menu-items">Giới thiệu</div>
       </div>
       <div>Bình</div>
    </div>
  );
}
export default Header;
