import React from 'react';
import './style.css';
import Item from '../Item/index';

// function renderTestMap(){
//     const arr = ['a','b','c','d'];
//     const mapData = arr.map((item, index) => {
//         return {key : item};
//     });
//     console.log("renderTestMap -> mapData", mapData)
// }
// renderTestMap();

function List(props) {
    const { datalist } = props;
    const listStyle = {
        padding: 16
    }
    const renderListItems = () => {
        return datalist.map((item, index) => {
            return (
                <Item key={index} active={index === 0} color={item.color} name={item.name} />
                // <>
                //     <Item active color={datalist[0].color} name={datalist[0].name} />
                //     <Item color={datalist[1].color} name={datalist[1].name} />
                //     <Item color={datalist[2].color} name={datalist[2].name} />
                //     <Item color={datalist[3].color} name={datalist[3].name} />
                // </>
            );
        });
    };
    return (
        <div className="list">
            <div style={listStyle} className="">
                <h3>List user</h3>
                <div className="row">
                    {renderListItems()}
                </div>
            </div>
        </div>
    );
}
export default List;