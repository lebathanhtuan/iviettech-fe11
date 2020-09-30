import React from 'react';
 import './style.css'

function Group(props) {
    const {Group,members,description}  = props;
    const renderMembers = () => {
        return members.map((member, index) => {
          const renderImage = () => {
            if(index<3){
              return   <img key={index} className='p-1 image ' src={member.image} alt=""></img>          
            }
            else return null;
          }
          return renderImage();
        });
    }
    const renderImages = () => {
      if(members.length>3){
        return(
          <>
            {renderMembers()}
            <div className='p-1 imageNull '><span>+{members.length-3}</span></div>
          </>
        );
      }
      else return(
        renderMembers()
      );
    }
  return (
    <div className='item '> 
        <div className="p-2 group"  >{Group}</div>
        <div className=' images'>
          {renderImages()}
        </div>
        <div className='p-1 border-top description'>{description}</div>
    </div>
    
  );
}

export default Group;
