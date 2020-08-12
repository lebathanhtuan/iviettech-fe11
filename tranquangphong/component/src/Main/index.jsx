import React from 'react';
import Sidebar from './Sidebar';
import List from './List';
import './styles.css';

function Main() {
  const dataList = [
    {
      name: 'Nguyen Van A',
      color: '#274b69',
    },
    {
      name: 'Tran Van B',
      color: '#85a1c1',
    },
    {
      name: 'Ly Thi C',
      color: '#c6ccd8',
    },
    {
      name: 'Do Quang D',
      color: '#3f4d63',
    }
  ];

  return (
    <div className="main">
      <Sidebar />
      <List dataList={dataList} />
    </div>
  );
};

export default Main;
