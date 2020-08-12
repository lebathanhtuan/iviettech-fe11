import React from 'react';
import './styles.css';
import SideBar from '../SideBar';
import List from '../List';
function Main() {
 const dataList=[
   {
     color: 'blue',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'purple',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'yellow',
     name: 'Lê Thị Thanh Ngân',
   },
   {
     color: 'green',
     name: 'Trần Văn A',
   }
 ]
  return (
    <div className="main">
      <SideBar />
     <List dataList={dataList} />
    </div>
  );
}

export default Main;
