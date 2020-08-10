import React from 'react';
import './styles.css';
import SideBar from '../SideBar';
import List from '../List';
function Main() {

  return (
    <div className="main">
      <SideBar />
     <List />
    </div>
  );
}

export default Main;