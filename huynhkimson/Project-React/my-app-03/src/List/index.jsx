import React, { useState } from 'react';
import './style.css';
// import Group from '../Group/index';
// import GroupList from '../GroupList/index';
import SignUp from '../SignUp/index';

function List(props) {
    // const { dataList, dataGroupList } = props;
    // const [grouplistActiveIndex, setGrouplistActiveIndex] = useState(0);
    // const [cartData, setCartdata] = useState([]);
    const listStyle = {
        padding: 16,
    }
    // const renderDataList = () => {
    //     return dataList.map((group, index) => {
    //         return (
    //             <Group key={index} name={group.name} members={group.members} />
    //         );
    //     });
    // }

    // const renderDataCartList = () => {
    //     return cartData.map((grouplist, index) => {
    //         return (
    //             <GroupList
    //                 key={index}
    //                 grouplistIndex={index}
    //                 activeIndex={grouplistActiveIndex}
    //                 setGrouplistActiveIndex={setGrouplistActiveIndex}
    //                 name={grouplist.name}
    //                 cartData={cartData}
    //                 setCartdata={setCartdata}
    //                 description={grouplist.description}
    //                 members={grouplist.members}
    //                 groupListData={grouplist}
    //                 isCard={false}
    //             />
    //         );
    //     });
    // };

    // const renderDataGroupList = () => {
    //     return dataGroupList.map((grouplist, index) => {
    //         return (
    //             <GroupList key={index}
    //                 grouplistIndex={index}
    //                 activeIndex={grouplistActiveIndex}
    //                 setGrouplistActiveIndex={setGrouplistActiveIndex}
    //                 name={grouplist.name}
    //                 cartData={cartData}
    //                 setCartdata={setCartdata}
    //                 description={grouplist.description}
    //                 members={grouplist.members}
    //                 groupListData={grouplist}
    //                 isCard={true}
    //             />
    //         );
    //     });
    // };

    return (
        <div className="list">
            <div style={listStyle}>
                <SignUp />
                {/* <h3>List user</h3>
                <div className="row">
                    {renderDataList()}
                </div>
                <h3>Cart list</h3>
                <div className="row">
                    {renderDataCartList()}
                </div>
                <h3>Group list</h3>
                <div className="row">
                    {renderDataGroupList()}
                </div> */}
            </div>
        </div>
    );
}
export default List;