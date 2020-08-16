import React from 'react';
import './styte.css';
import Group from './groupList.jsx'
function List(props){
   const {groupList, groupList2}= props;
   const renderGroup=() => {
      return groupList.map((item, index) => {
         return(
            <Group key={index}  name={item.name} members={item.members} description={item.description}  />
         )
      })
   }
   return(
      <div className='list-container'>
         <div className="row">
            <div className="col-md-12">
               <h3 className="ml-1" style={{fontWeight:'600'}}>Group list</h3>
            </div>
         {renderGroup()}
         </div>
      </div>
   )
}
export default List;
