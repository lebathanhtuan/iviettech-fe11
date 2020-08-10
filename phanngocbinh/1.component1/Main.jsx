import React from 'react';
import Sidebar from './Sidebar.jsx';
import List from './List.jsx';
function Main() {
  return (
    <main>
      <div className="main1">
        <Sidebar />
      </div>

      <div className="main2">
        <List />
      </div>
    </main>
    
  );
}

export default Main;
