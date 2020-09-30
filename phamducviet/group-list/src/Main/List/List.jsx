import React from 'react';

import './style.css';

import Group from './Group';

function List(props) {
  const {dataList} = props;

  const renderGroup = () => {
    return dataList.map((group, index) => {
      return (
        <Group   key={index}  Group={group.group}  members={group.members}>
         
        </Group>
      );
    });
    
  } 
  return (
    <div className = " list ">
      <h2>List Item</h2>
      {/* {renderTestMap()}
      {renderTestMap2()} */}
      <div className='row '>   
      {renderGroup()}     
      </div>
    </div>
    );
}

export default List;
