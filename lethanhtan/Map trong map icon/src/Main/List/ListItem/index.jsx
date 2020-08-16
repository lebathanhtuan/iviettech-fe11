import React from 'react';
import './listitem.css';
function ListItem(props) {
    const { name, description, members } = props;
    function rederItem() {
        return members.map((member, index) => {
            if (index < 3) {
                return (
                    <img src={member.image} alt="imgage" className="img" />
                )
            } else {
                return null;
            }
        })
    }
    function renderNumber() {
        const dem = members.length - 3;
        if (dem !== 0) {
            return (
                <div className="numbers">
                    <div className="number">+{dem}</div></div>
            )
        }else{
            return(
                
                    <div className="numbers display">
                        <div className="number">+{dem}</div></div>

            )
        }
    }
    return (
        <div className="listitem col-md-4 ">
            <div className="pl-2 border-bottom pt-2 pb-2">{name}</div>
            <div className="d-flex flex border-bottom pt-2 pb-2">
                {rederItem()} {renderNumber()}
            </div>

            <div className="pl-2 pt-2 pb-2">{description}</div>
        </div>
    );
}

export default ListItem;
