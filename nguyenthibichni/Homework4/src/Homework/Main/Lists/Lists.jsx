import React, {useState} from 'react';
import '../Main.css';
import Items from './Items';
import Card from '../BT_Bootstrap/Card';
import Group from './Group';
import Group2 from './Group2';
import { findByLabelText } from '@testing-library/react';



function List(props) {
  const { groupList2 } = props;
  const [groupActiveIndex, setGroupActiveIndex] = useState(0);

  const listContentCss = {
    display: 'flex',
    justifyContent: 'center',
    justifyContent: 'space-around',
  }

  function renderGroup() {
    return groupList2.map((group, index) => {
      console.log('Test4', group)
      return (
        //<Group key={index} name={group.name} member={group.member}/>
        <Group2
          key={index}
          name={group.name}
          members={group.members}
          description={group.description}
          activeGroupIndex = {groupActiveIndex}
          groupIndex ={index}
          setActiveGroupIndex ={setGroupActiveIndex}
           />
      )
    })
  }

  return (
    <div className="list-container">
      <h3>List User</h3>
      <div style={listContentCss}>
        {renderGroup()};
      </div>
    </div>
  )
}

export default List;