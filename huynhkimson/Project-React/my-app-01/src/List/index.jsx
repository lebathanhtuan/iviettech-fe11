import React from 'react';
import './style.css';
import Item from '../Item/index';

const listStyle = {
    padding : 16
}
function List(){
    return (
        <div className= "list">
            <div style = {listStyle} className= "">
                <h3>List user</h3>
                <div className="row">
                        <Item active color="gray" />
                        <Item color="#273660" />
                        <Item color="#276660" />
                        <Item color="#ff99ff" />
                </div>
            </div>
        </div>
    );
}
export default List;
