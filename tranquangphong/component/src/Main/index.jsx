import React from 'react';
import Sidebar from './Sidebar';
import List from './List';
import './styles.css';

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <List />
    </div>
  );
};

export default Main;