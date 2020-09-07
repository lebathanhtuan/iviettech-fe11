import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import ModifyListModal from '../ModifyListModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

import './styles.css';

function TodoList() {
  const [todoListData, setTodoListData] = useState([
    {
      title: 'Viết code',
    },
    {
      title: 'Dạy online',
    }
  ]);
  const [searchKey, setSearchKey] = useState('');
  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [modifyModalData, setModifyModalData] = useState({});
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);

  const newTodoListData = todoListData.filter((item) => {
    return (item.title.toLowerCase()).indexOf(searchKey.toLowerCase()) !== -1;
  });

  // Show/hide Modify Modal
  const handleShowModifyModal = (modifyType, modifyValue, index) => {
    setIsShowModifyModal(true);
    setModifyModalData({
      type: modifyType,
      title: modifyValue,
      index: index,
    });
  }
  const handleHideModifyModal = () => {
    setIsShowModifyModal(false);
    setModifyModalData({});
  }

  // Show/hide Confirm Modal
  const handleShowConfirmModal = (index) => {
    setIsShowConfirmModal(true);
    setConfirmModalData({ index: index });
  }
  const handleHideConfirmModal = () => {
    setIsShowConfirmModal(false);
    setConfirmModalData({});
  }

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

  const handleDeleteTask = (index) => {
    const newTodoListData = todoListData;
    newTodoListData.splice(index, 1);
    setTodoListData([
      ...newTodoListData,
    ]);
    setIsShowConfirmModal(false);
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setSearchKey(value);
  }
  
  const renderItemList = () => {
    return newTodoListData.map((item, itemIndex) => {
      if (!isShowMore && itemIndex > 4) {
        return null;
      }
      return (
        <ListGroup.Item key={itemIndex} className="todo-item-container">
          <p>{item.title}</p>
          <div className="todo-item-action">
            <Button
              variant="outline-danger"
              className="mr-2"
              onClick={() => handleShowConfirmModal(itemIndex)}
            >
              Xóa
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleShowModifyModal('edit', item.title, itemIndex)}
            >
              Sửa
            </Button>
          </div>
        </ListGroup.Item>
      );
    });
  }

  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <h4>Todo List</h4>
          <div className="todo-list-title">
            <input
              className="form-control"
              placeholder="Tìm kiếm..."
              onChange={(e) => handleChangeSearch(e)}
              style={{ width: 300 }}
            />
            <Button variant="primary" onClick={() => handleShowModifyModal('create')}>
              Thêm công việc
            </Button>
          </div>
          <div className="mt-2">
            <ListGroup>
              {renderItemList()}
            </ListGroup>
            {(!isShowMore && newTodoListData.length > 5) && (
              <div className="d-flex justify-content-center mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={() => setIsShowMore(true)}
                >
                  Hiển thị thêm
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModifyListModal
        isShowModal={isShowModifyModal}
        handleHideModal={handleHideModifyModal}
        handleSubmitForm={handleSubmitForm}
        modalData={modifyModalData}
      />
      <ConfirmDeleteModal
        isShowModal={isShowConfirmModal}
        handleHideModal={handleHideConfirmModal}
        handleDeleteTask={handleDeleteTask}
        modalData={confirmModalData}
      />
    </div>
  );
}

export default TodoList;
