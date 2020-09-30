import React ,{useState} from 'react';

import './style.css';

import Group from './Group';

function List(props) {
  const {groupList} = props;
  const [cartData, setCartData] = useState([]);
  const [groupData, setGroupData] = useState(0);
 //
  const renderGroup = () => {
    return groupList.map((group, index) => {
      return (
        <Group   key={index} 
         Group={group.name} 
          members={group.members}
          description={group.description}
          groupIndex={index}
          groupData= {groupData}
          setGroupData={setGroupData}
          cartData={cartData}
          setCartData={setCartData}
          groupListData = {group}
          >
        </Group>
          
      );
    });
    
  } 
  
  const renderCartGroup = () => {
    return cartData.map((cart, index) => {
      return (
        <Group   key={index} 
         Group={cart.name} 
          members={cart.members}
          description={cart.description}
          groupIndex={index}
          groupData= {groupData}
          cartData={cartData}
          setCartData={setCartData}
          setGroupData={setGroupData}
          groupListData = {cart}
          isDelete
          >
        </Group>
          
      );
    });
    
  } 
 
  return (
    <div className = " list ">
      <h2>CartData</h2>
      <div  className=' groups'>
        {renderCartGroup()}
      </div>
      
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
