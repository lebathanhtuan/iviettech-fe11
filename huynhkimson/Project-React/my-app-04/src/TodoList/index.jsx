import React, { useState, useEffect, useRef } from 'react';
import { Button, ListGroup } from 'react-bootstrap'
import ModifyListModal from '../ModifyListModal/index'
import DeleteConfirmModal from '../DeleteConfirmModal/index'

import './style.css';

function TodoList() {
    const [todoListData, setTodoListData] = useState([
        {
            id: 1,
            title: 'Mời bạn thêm nội dung cần nhập 1',
            description: 'Mô tả nội dung 1',
        },
        {
            id: 2,
            title: 'Mời bạn thêm nội dung cần nhập 2 ',
            description: 'Mô tả nội dung 2',
        },
        {
            id: 3,
            title: 'Mời bạn thêm nội dung cần nhập 3',
            description: 'Mô tả nội dung 3',
        },

    ]);
    const inputElement = useRef(null);

    useEffect(() => {
        inputElement.current.focus();
    }, []);
    const [searchKey, setSearchKey] = useState('');
    const [isShowModifyModal, setIsShowModifyModal] = useState(false);
    const [modifyModalData, setModifyModalData] = useState({});
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [confirmModalData, setConfirmModalData] = useState({});
    const [isShowMore, setIsShowMore] = useState(false);
    const [moreInfoList, setMoreInfoList] = useState([]);

    // show/hide Modify Modal
    const handleShowModifyModal = (modifyType, modifyValue, itemIndex) => {
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

    // Add/edit TodoList
    const handleSubmitForm = (values, type, editedId) => {
        if (type === 'create') {
            setTodoListData([
                {
                    title: values.title,
                    description: values.description,
                },
                ...todoListData,
            ]);
        } else {
            const newTodoListData = todoListData;
            const taskIndex = todoListData.findIndex((item) => item.id === editedId);
            newTodoListData.splice(taskIndex, 1, { title: values.title });
            setTodoListData([
                ...newTodoListData,
            ]);
        }
        setIsShowModifyModal(false);
    }

    // Remove TodoList
    const handleDeleteTodoList = (deletedId) => {
        const newTodoListData = todoListData;
        const taskIndex = todoListData.findIndex((item) => item.id === deletedId);
        newTodoListData.splice(taskIndex, 1);
        setTodoListData([
            ...newTodoListData,
        ]);
        setIsShowConfirmModal(false);
    };

    // Search
    const handlChangeSearch = (e) => {
        const { value } = e.target; // const value = e.target.value
        setSearchKey(value);
    }

    // Check chạy all phần tử trong mảng cũ if true thì đẩy item vào mảng mới 
    // tạo ra mảng mới để check hiển thị thêm
    const filterTodoListData = todoListData.filter((item) => {
        return ((item.title.toLowerCase()).indexOf(searchKey.toLowerCase()) !== -1)
    });

    const handleToggleMoreInfo = (id) => {
        const moreInfoIndex = moreInfoList.findIndex((moreId) => moreId === id);
        if (moreInfoIndex === -1) {
            setMoreInfoList([
                ...moreInfoList,
                id,
            ]);
        } else {
            const newMoreInfoList = moreInfoList;
            newMoreInfoList.splice(moreInfoIndex, 1);
            setMoreInfoList([
                ...newMoreInfoList,
            ]);
        }
    }

    const renderItemList = () => {
        return filterTodoListData.map((item, itemIndex) => {
            if (!isShowMore && itemIndex > 3) {
                return null;
            }
            return (
                <ListGroup.Item
                    key={itemIndex}>
                    <div className="todo-item-container">
                        <p>{item.title}</p>
                        <div className="todo-item-action">
                            <Button
                                variant="success btnShowMoreInfo"
                                onClick={() => {
                                    if (filterTodoListData.length === 1) {
                                        return null;
                                    }
                                    else {
                                        handleToggleMoreInfo(item.id)
                                    }
                                }}>
                                {moreInfoList.findIndex((moreId) => moreId === item.id) === -1 ? 'Hiện' : 'Ẩn'}
                            </Button>
                            <Button
                                variant="warning btnEdit ml-3"
                                onClick={() => {
                                    if (filterTodoListData.length === 1) {
                                        return null;
                                    }
                                    else {
                                        handleShowModifyModal('edit', item.title, item.id)
                                    }
                                }}>
                                Edit</Button>
                            <Button
                                variant="danger btnDelete ml-3"
                                onClick={() => {
                                    if (filterTodoListData.length === 1) {
                                        return null;
                                    }
                                    else {
                                        handleShowConfirmModal(item.id);
                                    }
                                }}>
                                Delete</Button>
                        </div>
                    </div>
                    {(moreInfoList.findIndex((id) => id === item.id) !== -1) && (
                        <div className="todo-item-description">
                            <p>{item.description}</p>
                        </div>
                    )}
                </ListGroup.Item>
            );
        })
    }

    return (
        <>
            <div className="todo-list-container">
                <div className="todo-list-content">
                    <h4>Todo List</h4>
                    <div className="todo-list-title">
                        <input
                            ref={inputElement}
                            className="form-control inputSearch"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => handlChangeSearch(e)}
                        />
                        <Button variant="primary btnAdd mr-3" onClick={() => { handleShowModifyModal('create') }}>
                            Add
                        </Button>
                    </div>
                    <div className="mt-2">
                        <ListGroup>
                            {renderItemList()}
                        </ListGroup>
                        {(!isShowMore && filterTodoListData.length > 3) && (
                            <div className="d-flex justify-content-center mt-2">
                                <Button
                                    variant="info btnAdd mr-3"
                                    className="rounded-pill"
                                    onClick={() => setIsShowMore(true)}>
                                    More </Button>
                            </div>
                        )}
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