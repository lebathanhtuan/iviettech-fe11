import React from 'react';
import './style.css';


function Iteam(props) {
    const listMemberCss = {
      width: 200,
    }
    const{name,members,description}  = props;
    let soDu = members.length - 3 ;
    const renderMember = ()=>{
        return members.map((member,index)=>{
          if(index<3){
          return  <img src={member.image} alt="image_empty"/>
          }
          else return null;
      })
      }    
    const renderSoDu = () => {
      if(soDu>0){
          return (
            <>
              <div className="soDu">+{soDu}</div>
            </>
          ) 
      }
      else return null;
    }
  return (
    <div className="list_member">
        <div className="member" >{name}</div>
        <div className="child_members" style={listMemberCss} >
              {renderMember()}
              {renderSoDu()}
        </div>
        <div className="description p-2 border-top" >{description} </div>
    </div>
  );
}

export default Iteam;