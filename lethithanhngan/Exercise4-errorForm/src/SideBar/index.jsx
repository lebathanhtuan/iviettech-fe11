import React,{useState} from 'react';
import './styles.css';
import SideItem from '../SideItem';
function SideBar(props) {
  
  const sideStyle={padding:5,}; 
  const [sidebarActiveIndex,setSidebarActiveIndex]=useState(0);
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
  return sidebarData.map((item,sideIndex) =>{
    return <SideItem key={sideIndex} 
             sideIndex={sideIndex}
             activeIndex={sidebarActiveIndex} 
             setSidebarActiveIndex={setSidebarActiveIndex} 
             name={item.name} 
    />
  });
}

  return (
    <div className="sb">
      <div style={sideStyle}>
        <h3>SideBar</h3>
        {renderData()}
      </div>
   </div>
  );
}

export default SideBar;
