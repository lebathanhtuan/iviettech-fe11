import React from 'react';
import Iteam from './Iteam';
import './style.css';
function list(props) {

  const { groupList } = props;
  
  
    const listContentCss={
      padding: 16,
    }
    
    const renderTestMap2 = () =>{
      const mapData = groupList.map((item,index)=>{
        return <Iteam key={index} name = {item.name} members={item.members} description={item.description} />;
      });
      console.log("list -> mapData", mapData)
      return mapData;
    }

  return (
    <div className="list-container">
      <div style={listContentCss}>
        <h3>List group</h3>
        <div className="list_members p-2">
          {renderTestMap2 ()} 
        </div>
      </div>
    </div>
    
  );
}

export default list;