import React from 'react';
import history from '../../util/history';

import './styles.css';

function Header() {
  return (
    <div className="header">
      <div>Brand Name</div>
      <div className="header-menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About us</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="mr-2">Thanh Tuấn</div>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => history.push('/login')}
        >
          Đăng xuất
        </button>
      </div>  
    </div>
  );
}

export default Header;
