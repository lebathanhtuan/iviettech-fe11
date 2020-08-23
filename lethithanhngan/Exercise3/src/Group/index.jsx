import React from 'react';
import './styles.css';


function Group(props) {
   const {nameG, members, description}=props;
   
 
  function renderMembers(){
      return members.map((member,index) =>{
        if(index<3){
          return(
            <img src={member.image} className="number" />
          );
        }else{
          return null;
        }
    });
    
  };
  function condition(){
    const obj = members.length - 3;
    if(obj>0){
      return(
        <div className="obj">
          <div className="obj-plus">+{obj}</div>
        </div>
      )
    }
}
  

  return (
    
    <div className="col-md-4 group"> 
        <div className="name-group">{nameG}</div>
        <div className="border-top groups">
        {renderMembers()} {condition()}
        </div>
  <div className="border-top">{description}</div>
    </div>
    
  );
}

export default Group;
