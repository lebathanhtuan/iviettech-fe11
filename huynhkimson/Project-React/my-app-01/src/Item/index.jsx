import React from 'react';
import './style.css';

function Item(props){
    const { color, name, active}= props;
    const itemColorStyle = {
        height: 200,
        backgroundColor: color
    }

    // let itemClass = active ? "item item-active" : "item ";

    // let itemClass = "";
    // if(active){
    //     itemClass = "item item-active"
    // }
    // else {
    //     itemClass = "item "
    // }

    return (
    <div className="col-md-3">
        <div className={active ? "item item-active" : "item "}>
                <div style={itemColorStyle}></div>
                <div>{name}</div>
        </div>
    </div>
    );
}
export default Item;
