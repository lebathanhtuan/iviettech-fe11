import React, { useState } from 'react';
import './style.css';

function GroupList(props) {
    const { name, description, members, grouplistIndex, activeIndex, setGrouplistActiveIndex } = props;
    console.log("GroupList -> activeIndex", activeIndex)
    console.log("GroupList -> grouplistIndex", grouplistIndex)
    const [count, setCount] = useState(1);

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
    function renderSurplus() {
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
        <div className={` col-md-3 item-group ${activeIndex === grouplistIndex ? 'item-group-active' : ''}`} >
            <div className="item-name-group">{name} - {count}
                <button className="btn btn-primary ml-2" onClick={() => setCount(count + 1)}>+</button>
                <button className="btn btn-primary ml-2" onClick={() => {
                    if (count > 0)
                        return setCount(count - 1)
                }}>
                    -</button>
                <button className="btn btn-primary ml-2"
                    onClick={() => setGrouplistActiveIndex(grouplistIndex)}>
                    Select</button>
            </div>
            <div className="image ">{renderMembersGroup()} {renderSurplus()} </div>
            <div className=" item-description border-top">{description}</div>
        </div >
    );
}
export default GroupList;