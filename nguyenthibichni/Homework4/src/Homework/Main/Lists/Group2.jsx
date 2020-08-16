import React, { useState } from 'react';
import './Group2.css';

function Group2(props) {
    const [countValue, setCountValue] = useState(1)
    const radius = {
        border: '1px solid',
        borderRadius: 50,
        marginLeft: 10
    }
    const plus = {
        border: '1px solid',
        borderRadius: 50,
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: '#e69900'
    }

    const index = {
        marginTop: '10px',
        marginLeft: '10px'
    }
    const { 
        name,
        members,
        description,
        activeGroupIndex,
        groupIndex,
        setActiveGroupIndex,
    } = props;

    function renderMember() {
        return members.map((members, index) => {
            if (index < 3) {
                return (
                    <div>
                        <img key={index} style={radius} src={members.image} />
                    </div>
                )
            }
            else {
                return (
                    null
                )
            }
        })
    }
    function test() {
        const i = members.length - 3
        if (i > 0) {
            return (
                <div>
                    <div style={plus}>
                        <p style={index}>+{i}</p>
                    </div>
                </div>
            )
        }
    };


    return (
        <div className={`group ${activeGroupIndex === groupIndex ? 'group-active' : ''}`}>
            <div className="name">{name} - {countValue}
                {/* <button className=" ml-2 btn btn-danger" onClick={() => setCountValue(countValue + 1)} style={{ width: 35 }}>
                    +
                </button>
                <button className=" ml-2 btn btn-danger" onClick={() => { return (countValue > 0) ? setCountValue(countValue - 1) : 0 }} style={{ width: 35 }}>
                    -
                </button> */}
                <button className=" ml-2 btn btn-danger" onClick={() => setActiveGroupIndex(groupIndex)}>
                    Select
                </button>
            </div>

            <div className="img">{renderMember()},{test()}</div>
            <div className="description">{description}</div>
        </div>
    )
}
export default Group2;