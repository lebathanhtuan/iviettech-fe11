import React from 'react';
import './item.css'

function Item(props) {
    // const name = props.name;
    // const adrees = props.adrees
    // const active=props.active;
    // const color=props.color;
    //es6
    const {active ,color}=props
    console.log("TCL: Item -> color", color)
    const itemStype={
        height:200,
        backgroundColor: color,
        // with:100%''
    };
    // let itemClass="";
    // if(active){
    //     itemClass='item  item-active'
    // }
    // else{
    //     itemClass='item'
    // }
    let itemClass=active ?'item  item-active':'item';

    return (
        <div className="col-md-3">
            <div className={itemClass}>
                <div style={itemStype}></div>
                {/* {name} -{adrees} */}

                <div> {color}</div>
            </div>

        </div>
    );
}

export default Item;
