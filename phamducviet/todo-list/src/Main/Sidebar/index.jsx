import React ,{useState} from 'react';
import SidebarItem from './SidebarItem';
import './style.css';

function Sidebar(){
  const [sidebarActiveIndex, setSidebarActiveIndex] = useState(0);
   
  const renderSidebarItem = () => {
     const arrSiderbar = [
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"}
      ];
      return arrSiderbar.map((sidebarItem, sidebarIndex) => {
        return (
          <SidebarItem 
            key={sidebarIndex}
            sidebarIndex={sidebarIndex}
            activeIndex={sidebarActiveIndex}
            setSidebarActiveIndex={setSidebarActiveIndex}
            name= {sidebarItem.name}>
            
          </SidebarItem>
        );
     });
     
   }
  return (
    <div className = "sidebar">
    <div>
      
    {renderSidebarItem()}
    
    </div>

    </div>
  );
}

export default Sidebar;
