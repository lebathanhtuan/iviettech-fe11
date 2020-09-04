import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap'
import ModifyListModal from '../ModifyListModal/index'
import DeleteConfirmModal from '../DeleteConfirmModal/index'

import './style.css';

function TodoList() {
    const [todoListData, setTodoListData] = useState([
        {
            title: 'Mời bạn thêm nội dung cần nhập'
        }
    ]);

    const [isShowModifyModal, setIsShowModifyModal] = useState(false);
    const [modifyModalData, setModifyModalData] = useState({});
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [confirmModalData, setConfirmModalData] = useState({});

    // show/hide Modify Modal
    const handleShowModifyModal = (modifyType, modifyValue, itemIndex) => {
        console.log("handleShowModifyModal -> itemIndex", itemIndex)
        console.log("handleShowModifyModal -> modifyValue", modifyValue)
        console.log("handleShowModifyModal -> modifyType", modifyType)
        setIsShowModifyModal(true);
        setModifyModalData({
            type: modifyType,
            title: modifyValue,
            index: itemIndex,
        });
    };
    const handleHideModifyModal = () => {
        setIsShowModifyModal(false);
        setModifyModalData({});
    };

    // show/hide Confirm Modal
    const handleShowConfirmModal = (itemIndex) => {
        setIsShowConfirmModal(true);
        setConfirmModalData({ itemIndex: itemIndex });
    };
    const handleHideConfirmModal = () => {
        setIsShowConfirmModal(false);
        setConfirmModalData({});
    };

    // Add TodoList
    const handleSubmitForm = (values, type, index) => {
        if (type === 'create') {
            setTodoListData([
                {
                    title: values.title,
                },
                ...todoListData,
            ]);
        } else {
            const newTodoListData = todoListData;
            newTodoListData.splice(index, 1, { title: values.title });
            setTodoListData([
                ...newTodoListData,
            ]);
        }
        setIsShowModifyModal(false);
    }

    // Remove TodoList
    const handleDeleteTodoList = (itemIndex) => {
        const newTodoListData = todoListData;
        newTodoListData.splice(itemIndex, 1);
        setTodoListData([
            ...newTodoListData,
        ]);
        setIsShowConfirmModal(false);
    };

    const renderItemList = () => {
        const countTodoList = todoListData.length
        return todoListData.map((item, itemIndex) => (
            <ListGroup.Item
                key={itemIndex}
                className="todo-item-container">
                <p>{item.title}</p>
                <div className="todo-item-action">
                    <Button variant="danger btnEdit" onClick={() => {
                        if (countTodoList === 1) {
                            return null;
                        }
                        else {
                            handleShowModifyModal('edit', item.title, itemIndex)
                        }
                    }}>
                        Edit</Button>
                    <Button variant="danger btnDelete ml-3" onClick={() => {
                        if (countTodoList === 1) {
                            return null;
                        }
                        else {
                            handleShowConfirmModal(itemIndex);
                        }
                    }}>
                        Delete</Button>
                </div>
            </ListGroup.Item>
        ))
    }

    return (
        <>
            <div className="todo-list-container">
                <div className="todo-list-content">
                    <div className="todo-list-title">
                        <h4>Todo List</h4>
                        <Button variant="primary btnAdd mt-4 mr-3" onClick={() => { handleShowModifyModal('create') }}>
                            Add
                        </Button>
                    </div>
                    <div className="mt-2">
                        <ListGroup>
                            {renderItemList()}
                        </ListGroup>
                    </div>
                </div>
                <ModifyListModal
                    isShowModal={isShowModifyModal}
                    handleHideModal={handleHideModifyModal}
                    handleSubmitForm={handleSubmitForm}
                    modalData={modifyModalData}
                />
                <DeleteConfirmModal
                    isShowModal={isShowConfirmModal}
                    handleHideModal={handleHideConfirmModal}
                    handleDeleteTodoList={handleDeleteTodoList}
                    modalData={confirmModalData}
                />
            </div >
        </>
    );
}

export default TodoList;