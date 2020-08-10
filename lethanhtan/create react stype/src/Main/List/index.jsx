import React from 'react';

import '../main.css';
import Item from '../Item'

function List() {
    return (
        <div className="item1 row   ">
            <Item  active color="#808080" />
            <Item color="#808000" />
            <Item color="#800080" />
            <Item color="#008080" />
            {/* <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân" adrees="1123" />
            <Item name="Lê thanh tân1" adrees="1123" />
            <Item name="Lê thanh tân2" adrees="1123" /> */}

        </div>
    );
}

export default List;
