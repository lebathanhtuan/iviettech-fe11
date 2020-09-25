import React, { useState, useEffect, useRef } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap'

import ModifyListModal from './ModifyListModal/index'
import DeleteConfirmModal from './DeleteConfirmModal/index'
import { connect } from 'react-redux';

import {
    createTask,
    editTask,
    deleteTask,
    completeTask,
    unCompleteTask,
} from '../../redux/actions/todoList.action'
import './style.css';

function TodoList({
    todoListData,
    completedListData,
    createTask,
    editTask,
    deleteTask,
    completeTask,
    unCompleteTask,
}) {
    const inputElement = useRef(null);

    useEffect(() => {
        // getTaskList();
        // getCompleteList();
        inputElement.current.focus();
    }, []);

    const [searchKey, setSearchKey] = useState('');
    const [isShowModifyModal, setIsShowModifyModal] = useState(false);
    const [modifyModalData, setModifyModalData] = useState({});
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [confirmModalData, setConfirmModalData] = useState({});
    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowMoreComplete, setIsShowMoreComplete] = useState(false);
    const [moreInfoList, setMoreInfoList] = useState([]);

    // Check chạy all phần tử trong mảng cũ if true thì đẩy item vào mảng mới 
    // tạo ra mảng mới để check hiển thị thêm
    // check !== -1 hoặc < 0 được hiểu không có phần tử đó 
    const filterTodoListData = todoListData.filter((item) => {
        return ((item.title.toLowerCase()).indexOf(searchKey.toLowerCase()) !== -1)
    });

    // show/hide Modify Modal
    const handleShowModifyModal = (modifyType, modifyValue) => {
        setIsShowModifyModal(true);
        if (modifyType === 'create') {
            setModifyModalData({
                type: modifyType,
            });
        } else {
            setModifyModalData({
                type: modifyType,
                title: modifyValue.title,
                description: modifyValue.description,
                id: modifyValue.id,
            });
        }
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
    const handleSubmitForm = (values, type, itemIndex) => {
        if (type === 'create') {
            createTask({
                title: values.title,
                description: values.description,
            });
        } else {
            editTask({
                id: itemIndex,
                title: values.title,
                description: values.description
            });
        }
        setIsShowModifyModal(false);
    }

    // Delete TodoList
    const handleDeleteTodoList = (deletedId) => {
        deleteTask({
            id: deletedId,
        });
        setIsShowConfirmModal(false);
    };

    // Search
    const handlChangeSearch = (e) => {
        const { value } = e.target; // const value = e.target.value
        setSearchKey(value);
    }

    // chuyển đổi hiện ẩn show mô tả
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

    const handlCompleteTask = (e, completeItem) => {
        e.preventDefault();
        const { checked } = e.target;
        if (checked) {
            completeTask({ completeItem });
        }
    }

    const handlUnCompleteTask = (e, unCompleteItem) => {
        e.preventDefault();
        const { checked } = e.target;
        console.log("handlUnCompleteTask -> checked", checked)
        if (checked) {
            unCompleteTask({ unCompleteItem });
        }
    }

    const renderCompleteTaskList = () => {
        return completedListData.map((item, itemIndex) => {
            if (!isShowMoreComplete && itemIndex > 3) {
                return null;
            }
            return (
                <ListGroup.Item
                    key={itemIndex}
                    className="d-flex completeItem">
                    <Form.Check type="checkbox"
                    onChange={(e) => handlUnCompleteTask(e, item)}
                    />
                    <p className="ml-2"><del>{item.title}</del></p>
                </ListGroup.Item>
            );
        });
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
                        <div className="d-flex item">
                            <Form.Check type="checkbox"
                            onChange={(e) => handlCompleteTask(e, item)}
                            />
                            <p className="ml-2">{item.title}</p>
                        </div>
                        <div className="todo-item-action">
                            <Button
                                variant="success btnShowMoreInfo"
                                onClick={() => {
                                    if (filterTodoListData.length === 0) {
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
                                    if (filterTodoListData.length === 0) {
                                        return null;
                                    }
                                    else {
                                        handleShowModifyModal('edit', item)
                                    }
                                }}>
                                Sửa</Button>
                            <Button
                                variant="danger btnDelete ml-3"
                                onClick={() => {
                                    if (filterTodoListData.length === 0) {
                                        return null;
                                    }
                                    else {
                                        handleShowConfirmModal(item.id);
                                    }
                                }}>
                                Xóa</Button>
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
                        <Button variant="primary btnAdd ml-3" onClick={() => { handleShowModifyModal('create') }}>
                            Thêm
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
                    <div className="mt-4">
                        <h5>Công việc đã hoàn thành</h5>
                        <ListGroup>
                            {renderCompleteTaskList()}
                        </ListGroup>
                        {(!isShowMoreComplete && completedListData.length > 3) && (
                            <div className="d-flex justify-content-center mt-2">
                                <Button
                                    variant="info btnAdd mr-3"
                                    className="rounded-pill"
                                    onClick={() => setIsShowMoreComplete(true)}>
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
// store ( state tổng )
const mapStateToProps = (state) => {
    const { todoListData, completedListData } = state.todoListReducer;
    return {
        todoListData,
        completedListData,
    }
};

// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        // getTaskList: (params) => dispatch(getTaskList(params)),
        // getCompleteList: (params) => dispatch(getCompleteList(params)),
        createTask: (params) => dispatch(createTask(params)),
        editTask: (params) => dispatch(editTask(params)),
        deleteTask: (params) => dispatch(deleteTask(params)),
        completeTask: (params) => dispatch(completeTask(params)),
        unCompleteTask: (params) => dispatch(unCompleteTask(params)),
        // addCompleteTask: (params) => dispatch(addCompleteTask(params)),
        // deleteCompleteTask: (params) => dispatch(deleteCompleteTask(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);