import React from 'react';

function SiderbarItem(props) {
    const {name}=props
    return (
        <div className="listitem">
                <div>{name}</div>
            </div>
       
    );
}

export default SiderbarItem;
