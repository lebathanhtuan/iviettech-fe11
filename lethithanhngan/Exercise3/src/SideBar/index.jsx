import React from 'react';
import './styles.css';
import SideItem from '../SideItem';
function SideBar(props) {
  
  const sideStyle={padding:5,}; 
//Tạo hàm trong side bar để lấy giá trị truyền vê
const sidebarData = [
  {
    name:'Homepage',
  },
  {
    name:'Searching',
  },
  {
    name:'Help',
  },
  {
    name:'Setting',
  }
]
function renderData(){
  console.log("renderData -> sidebarData", sidebarData);
  return sidebarData.map((item,index) =>{
    return <SideItem name={item.name} />
  });
}

  return (
    <div className="sb">
      <div style={sideStyle}>
        <h3>SideBar</h3>
        {renderData()};
      </div>
   </div>
  );
}

export default SideBar;
