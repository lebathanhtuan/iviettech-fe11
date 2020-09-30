import React from 'react';
 import './style.css'

function Group(props) {
    const {Group,members}  = props;
    const renderMembers = () => {
        return members.map((member, index) => {
            return (
            <div key={index} className='p-1 border-top'>{member.name} - {member.address}</div>
            )
        })
    }
  return (
    <div className='item '> 
        <div className="p-2 bg-warning border-top"  >{Group}</div>
        <div >{renderMembers()}</div>
    </div>
   
  );
}

export default Group;
