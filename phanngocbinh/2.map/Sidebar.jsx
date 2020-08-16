import React from 'react';
import './styte.css';
import SidebarItem from './sidebarItem.jsx';
import Item from './Item';
function Sidebar(props) {
   let { sidebarList}= props;
   const renderItemSlidebar= () => {
      return sidebarList.map((item, index)=>{
         return(
            <SidebarItem key={index} list= {item.list}  />
         )
      })
   }
   return (
     <div className="sidebar-container">
         <div className="row">
            <div className="col-md-12 sidebarItem-list">
                  {renderItemSlidebar()}
            </div>
         </div>
     </div>
  );
}
export default Sidebar;
