import React, {useState} from 'react';
import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem'

function Sidebar(props) {
  const [sidebarActiveIndex, setSidebarActiveIndex] = useState(0);
  const sidebarData = [
    {
      name: "Thông tin cá nhân"
    },
    {
      name: "Thông báo và tin tức"
    },
    {
      name: "Lịch học"
    },
    {
      name: "Đánh giá"
    },
  ]
  const renderSidebarItem = () => {
    return sidebarData.map((sidebarItem, sidebarIndex) => {
      return (
        <SidebarItem
          key={sidebarIndex}
          sidebarIndex ={sidebarIndex}
          activeIndex = {sidebarActiveIndex}
          setSidebarActiveIndex = {setSidebarActiveIndex}
          name={sidebarItem.name}
           />
      )
    })
  }
  return (
    <div className="sidebar-container">
      {renderSidebarItem()}
    </div>
  )
}
export default Sidebar;
