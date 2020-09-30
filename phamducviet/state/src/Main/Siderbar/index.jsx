import React ,{useState} from 'react';
import SiderbarItem from './SiderbarItem';
import './style.css';

function Siderbar(){
  const [sidebarActiveIndex, setSidebarActiveIndex] = useState(0);
   const renderSiderbarItem = () => {
     const arrSiderbar = [
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"},
       {name: "Trang chủ"}
      ];
      return arrSiderbar.map((sidebarItem, sidebarIndex) => {
        return (
          <SiderbarItem 
            key={sidebarIndex}
            sidebarIndex={sidebarIndex}
            activeIndex={sidebarActiveIndex}
            setSidebarActiveIndex={setSidebarActiveIndex}
            name= {sidebarItem.name}>
            
          </SiderbarItem>
        );
     });
     
   }
  return (
    <div className = "siderbar">
    <div>
      
    {renderSiderbarItem()}
    
    </div>

    </div>
  );
}

export default Siderbar;
