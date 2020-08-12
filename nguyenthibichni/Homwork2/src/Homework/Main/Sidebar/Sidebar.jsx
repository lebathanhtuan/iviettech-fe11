import React from 'react';
import '../Main.css';
import Items from '../Lists/Items'

function Sidebar(props) {
  return (
    <div className="sidebar">
       Sidebar
       <Items name="Thông tin cá nhân" color/>
       <Items name="Thông báo và tin tức"/>
       <Items name="Lịch học"/>
       <Items name="Đánh giá"/>
    </div>
  );
}

export default Sidebar;
