import React, { useState } from 'react';
import './style.css';
import Group from '../Group/index';
import GroupList from '../GroupList/index';

function List(props) {
    const { dataList, dataGroupList } = props;
    const [grouplistActiveIndex, setGrouplistActiveIndex] = useState(0);

    const listStyle = {
        padding: 16
    }
    const renderDataList = () => {
        return dataList.map((group, index) => {
            return (
                <Group key={index} name={group.name} members={group.members} />
            );
        });
    }

    const renderDataGroupList = () => {
        return dataGroupList.map((grouplist, index) => {
            return (
                <GroupList key={index}
                grouplistIndex={index}
                activeIndex={grouplistActiveIndex}
                setGrouplistActiveIndex={setGrouplistActiveIndex}
                name={grouplist.name} 
                description={grouplist.description} 
                members={grouplist.members}
                />
            );
        });
    };

    return (
        <div className="list">
            <div style={listStyle}>
                <h3>List user</h3>
                <div className="row">
                    {renderDataList()}
                </div>
                <div className="row">
                    {renderDataGroupList()}
                </div>
            </div>
        </div>
    );
}
export default List;