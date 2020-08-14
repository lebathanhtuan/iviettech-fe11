import React from 'react';
import SiderbarItem from './SiderbarItem';

function Siderbar(props) {
    const { dataSiderBar } = props;
    console.log(dataSiderBar);
    function renderSiderBar() {
        return dataSiderBar.map((item, index) => {
            return(
                <SiderbarItem key={index} name={item.name} />
            )
        })
    }
    return (
        <div className="siderbar">
            {renderSiderBar()}
        </div>
    );
}

export default Siderbar;
