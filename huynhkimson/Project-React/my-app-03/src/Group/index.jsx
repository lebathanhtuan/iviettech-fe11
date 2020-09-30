import React from 'react';
import './style.css';

function Group(props) {
    const { name, members} = props;

    function renderMembers(){
        return members.map((member, index) => {
            return (
                <div key={index} className="p-2 border-top">
                    {member.name} - {member.address}
                </div>
            );
        });
    };
    return (
        <div className="col-md-12 item">
            <div className=" item-name">{name}</div>
            <div>{renderMembers()}</div>
        </div>
    );
}
export default Group;
