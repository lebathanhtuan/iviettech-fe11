import React from 'react';
import './style.css';
import Item from '../Item/index';

function List(props){
    const {datalist} = props;
    console.log('Log: : List -> datalist', datalist);
    const listStyle = {
        padding : 16
    }
    return (
        <div className= "list">
            <div style = {listStyle} className= "">
                <h3>List user</h3>
                <div className="row">
                        <Item active color={datalist[0].color} name={datalist[0].name} />
                        <Item color={datalist[1].color} name={datalist[1].name} />
                        <Item color={datalist[2].color} name={datalist[2].name} />
                        <Item color={datalist[3].color} name={datalist[3].name} />
                </div>
            </div>
        </div>
    );
}
export default List;
