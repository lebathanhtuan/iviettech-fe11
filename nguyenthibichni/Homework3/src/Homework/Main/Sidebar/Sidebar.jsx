import React from 'react';
import '../Main.css';
import Items from '../Lists/Items'

const sidebarData = [
  {
    name:"Thông tin cá nhân"
  },
  {
    name:"Thông báo và tin tức"
  },
  {
    name:"Lịch học"
  },
  {
    name:"Đánh giá"
  },
]

function mapSidebar(){  
  return sidebarData.map((item, index) => {
    console.log('Sidebar',item)
    return(
      <Items name={item.name}/>
    )
  })
}


function Sidebar(props) {
  
  return (
    <div className="sidebar">
       Sidebar
       {mapSidebar()}
    </div>
  );
}

export default Sidebar;
