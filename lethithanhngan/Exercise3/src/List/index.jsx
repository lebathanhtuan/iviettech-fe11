import React from 'react';
import './styles.css';
import Item from '../Item';
import Group from '../Group';
function List(props) {

  const listStyle={padding:16,};
  const {groupList}=props;
  console.log("List -> groupList", groupList)

  // // viết hàm để thử map
  // function renderTestMap(){
  //   const arr=[{key:'n'},{key:'g'},{key:'a'},{key:'b'}]
  //   const mapData=arr.map((item,index) => {
  //     console.log('Log: :renderTestMap -> item',item);
  //     return item.key;
    
  //   });
  //   console.log('Log: :renderTestMap -> mapData',mapData);
  // }
 

  // hàm group list
function renderGroupList(){
  return groupList.map((item,index) =>{
    return ( <Group key={index} nameG={item.nameG} members={item.members} description={item.description} />
  )
});
}
  return (
    <div className="list-container">
      <div style={listStyle}>
        <p>Group User</p>
        <div className="row">
          {renderGroupList()}
        </div>
      </div>
    </div>
  );
}

export default List;
