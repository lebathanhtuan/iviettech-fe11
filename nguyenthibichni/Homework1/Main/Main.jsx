import React from 'react';
import Lists from './Lists/Lists';
import Sidebar from './Sidebar/Sidebar';


function Main(props) {
  return(
    <div className="main">
       <Sidebar/>
       <Lists/>
    </div>
  );
}

export default Main;