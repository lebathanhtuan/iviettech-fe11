import React, { useState } from 'react';
import './style.css';
import Group from '../Group/index';
import GroupList from '../GroupList/index';
import SignUp from '../SignUp/index';

function List(props) {
    const { dataList, dataGroupList } = props;
    const [grouplistActiveIndex, setGrouplistActiveIndex] = useState(0);
    const [cartData, setCartdata] = useState([]);
    const [finishFormValue, setFinishFormValue] = useState({});
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
    });

    const checkValidate = (values) => {
        let errorsData = {};
        if (!values.email) {
            errorsData = {
                ...errorsData,
                email: 'Bạn chưa nhập email',
            };
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errorsData = {
                ...errorsData,
                email: 'Địa chỉ email không hợp lệ',
            };
        } else {
            errorsData = {
                ...errorsData,
                email: '',
            };
        }
        if (!values.password) {
            errorsData = {
                ...errorsData,
                password: 'Bạn chưa nhập password',
            };
        } else if (values.password.length < 8) {
            errorsData = {
                ...errorsData,
                password: 'Password phải có độ dài tối thiểu là 8 kí tự',
            };
        } else {
            errorsData = {
                ...errorsData,
                password: '',
            };
        }
        if (!values.address) {
            errorsData = {
                ...errorsData,
                address: 'Bạn chưa nhập address',
            };
        } else {
            errorsData = {
                ...errorsData,
                address: '',
            };
        }
        if (!values.phoneNumber) {
            errorsData = {
                ...errorsData,
                phoneNumber: 'Bạn chưa nhập phoneNumber',
            };
        } else if (values.phoneNumber.length !== 10) {
            errorsData = {
                ...errorsData,
                phoneNumber: 'Phone number phải có 10 số',
            };
        } else {
            errorsData = {
                ...errorsData,
                phoneNumber: '',
            };
        }
        setErrors(errorsData);
    }

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

    const renderDataCartList = () => {
        return cartData.map((grouplist, index) => {
            return (
                <GroupList
                    key={index}
                    grouplistIndex={index}
                    activeIndex={grouplistActiveIndex}
                    setGrouplistActiveIndex={setGrouplistActiveIndex}
                    name={grouplist.name}
                    cartData={cartData}
                    setCartdata={setCartdata}
                    description={grouplist.description}
                    members={grouplist.members}
                    groupListData={grouplist}
                    isCard={false}
                />
            );
        });
    };

    const renderDataGroupList = () => {
        return dataGroupList.map((grouplist, index) => {
            return (
                <GroupList key={index}
                    grouplistIndex={index}
                    activeIndex={grouplistActiveIndex}
                    setGrouplistActiveIndex={setGrouplistActiveIndex}
                    name={grouplist.name}
                    cartData={cartData}
                    setCartdata={setCartdata}
                    description={grouplist.description}
                    members={grouplist.members}
                    groupListData={grouplist}
                    isCard={true}
                />
            );
        });
    };

    return (
        <div className="list">
            <div style={listStyle}>
                <h3>Form result</h3>
                <div>Email: {finishFormValue.email}</div>
                <div>Password: {finishFormValue.password}</div>
                <div>Address: {finishFormValue.address}</div>
                <div>Phone Number: {finishFormValue.phoneNumber}</div>
                <div>Gender: {finishFormValue.gender}</div>
                <div>Radios: {finishFormValue.radios}</div>
                <div>Checkbox: {finishFormValue.approve}</div>
                <h3>Sign Up</h3>
                <SignUp errors={errors} checkValidate={checkValidate} />
                <h3>List user</h3>
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
                </div>
            </div>
        </div>
    );
}
export default List;