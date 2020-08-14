import React from 'react';
import Lists from './Lists/Lists';
import Sidebar from './Sidebar/Sidebar';


function Main(props) {
  const dataList = [
    {
      color: '#ff33ff',
      name: 'Nguyễn Thị Bích Ni'
    },
    {
      color: '#ff8533',
      name: 'Nguyễn Thị Bích Na'
    },
    {
      color: '#1aff1a',
      name: 'Nguyễn Thị Bích Nga'
    },
    {
      color: '#00bfff',
      name: 'Nguyễn Thị Bích Nguyên'
    }

  ]
  return(
    <div className="main">
       <Sidebar/>
       <Lists dataList={dataList} />
    </div>
  );
}

export default Main;

