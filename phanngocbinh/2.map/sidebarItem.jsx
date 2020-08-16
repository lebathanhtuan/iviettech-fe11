import React from 'react';
import './styte.css'
import Item from './Item';
import Sidebar from './Sidebar';
import List from './List';
function SidebarItem(props){
   let {list}= props;
return(
     <div className="list_1">
           {list}
     </div>
)
}
export default SidebarItem;
