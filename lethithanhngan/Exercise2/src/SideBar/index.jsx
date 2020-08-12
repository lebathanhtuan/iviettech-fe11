import React from 'react';
import './styles.css';
import SideItem from '../SideItem';
function SideBar(props) {
  
  const sideStyle={padding:5,}; 

  return (
    <div className="sb">
      <div style={sideStyle}>
        <h3>SideBar</h3>
        <SideItem active color="plum" name="Homepage"/>
        <SideItem color="blueviolet" name="Searching" />
         <SideItem color="#71B7B7" name="Help" />
        <SideItem color="#E5E5E5" />
     </div>
    </div>
  );
}

export default SideBar;
