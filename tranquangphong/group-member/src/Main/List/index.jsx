import React, { useState } from 'react';
import Group from './Group'
import './styles.css';

function List(props) {
  const { groupList } = props;
  const [ activeGroup, setActiveGroup ] = useState(0);

  const renderGroups = () => {
    return groupList.map((item, index) => {
      return (
        <Group 
        key={index} 
        name={item.name} 
        description={item.description} 
        members={item.members}
        activeIndex={index}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
        />
      );
    });
  }

  return (
    <div className="list">
      <p className="title">Groups list</p>
      <div className="row px-3">
        {renderGroups()}
      </div>
    </div>
  );
}

export default List; 
