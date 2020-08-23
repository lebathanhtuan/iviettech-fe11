import React from 'react';
import './list.css';
import ListItem from './ListItem'
function List(props) {
  const { groupList } = props;
  function rederItem(){
      return groupList.map((item,index)=>{
        const {members}=item;
        console.log(members)
        return (
          <ListItem key={index}  name={item.name} description={item.description} members={item.members}/>
        )
      })
  }
  return (
    <div className="list  row">
        {rederItem()}
    </div>
  );
}

export default List;
