import React from 'react';
import './style.css';

function GroupList(props) {
    const { name, description, members } = props;

    function renderMembersGroup() {
        return members.map((member, index) => {
            if (index < 3) {
                return (
                    <img key={index} className="image-children p-2 " src={member.image} alt="image" />
                );
            } else {
                return null;
            }
        });
    };
    function renderRurplus() {
        const Surplus = members.length - 3
        if (Surplus > 0) {
            return (
                <div className="surplus">
                    <div className="number-surplus">+{Surplus}</div>
                </div>
            )
        }
    };
    return (
        <div className="col-md-3 item-group">
            <div className="item-name-group">{name}</div>
            <div className="image ">{renderMembersGroup()} {renderRurplus()} </div>
            <div className=" item-description border-top">{description}</div>
        </div>
    );
}
export default GroupList;