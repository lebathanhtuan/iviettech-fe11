import React from 'react';

import '../main.css';
import Item from '../Item'

function List(props) {
    const {datalist}=props;
    console.log(datalist)
    return (
        <div className="item1 row   ">
            <Item   color={datalist[0].color} name={datalist[0].name}/>
            <Item   color={datalist[1].color} name={datalist[1].name}/>
            <Item   color={datalist[2].color} name={datalist[2].name}/>
            <Item   color={datalist[3].color} name={datalist[3].name}/>
            {/* <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân1" adrees="1123" />
            <Item name="Lê thanh tân2" adrees="1123" /> */}

        </div>
    );
}

export default List;
