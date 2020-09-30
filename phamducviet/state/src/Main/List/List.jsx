import React ,{useState} from 'react';

import './style.css';

import Group from './Group';

function List(props) {
  const {groupList} = props;
  const [groupLists, setGroupLists] = useState(0);
  const renderGroup = () => {
    return groupList.map((group, index) => {
      return (
        <Group   key={index} 
         Group={group.name} 
          members={group.members}
          description={group.description}
          groupListsIndex={index}
          activeGroup= {groupLists}
          setGroupLists={setGroupLists}
           >
         
        </Group>
      );
    });
    
  } 
  return (
    <div className = " list ">
      <h2>List Item</h2>
      {/* {renderTestMap()}
      {renderTestMap2()} */}
      <div className=' groups'>   
      {renderGroup()}     
      </div>
    </div>
    );
}

export default List;
