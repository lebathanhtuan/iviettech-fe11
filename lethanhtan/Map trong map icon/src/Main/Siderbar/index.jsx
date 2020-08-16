import React from 'react';
import './siderbar.css';
import SiderbarItem from './SiderbarItem'
function Siderbar(props) {
  const { menu } = props;
  console.log(menu);
  function renderItem1() {
    return menu.map((item, index) => {
      return (
        <SiderbarItem key={index} name={item.name} />
      )
    })
  }
  return (
    <div className="siderbar " >
      <div className="menu">
        {renderItem1()}
      </div>
    </div>
  );
}

export default Siderbar;
