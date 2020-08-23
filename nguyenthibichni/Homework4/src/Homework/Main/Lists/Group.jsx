import React from 'react';
import './Items.css';
import './Group.css';



function Group(props) {
    const {name, member} = props;

    function renderMember(){
        return member.map((member, index) => {
            return(
                <div className = "p-2 border-top">
                    {member.user} - {member.address}
                </div>
            )
        })
    }
 
    return(
    <div className="group">
        <div className="name">{name}</div>
        <div>{renderMember()}</div>
    </div>
    )
    
}
          

export default Group;