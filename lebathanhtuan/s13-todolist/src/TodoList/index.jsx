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
  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(null);

  // Show/hide Modify Modal
  const handleShowModifyModal = () => {
    setIsShowModifyModal(true);
  }
  const handleHideModifyModal = () => {
    setIsShowModifyModal(false);
  }

  // Show/hide Confirm Modal
  const handleShowConfirmModal = (index) => {
    setIsShowConfirmModal({ index: index });
  }
  const handleHideConfirmModal = () => {
    setIsShowConfirmModal(null);
  }

  const handleSubmitForm = (values) => {
    setTodoListData([
      {
        title: values.title,
      },
      ...todoListData,
    ]);
    setIsShowModifyModal(false);
  }

  const handleDeleteTask = (index) => {
    const newTodoListData = todoListData;
    newTodoListData.splice(index, 1);
    setTodoListData([
      ...newTodoListData
    ]);
    setIsShowConfirmModal(null);
  }

  const renderItemList = () => {
    return todoListData.map((item, itemIndex) => (
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
          <Button variant="outline-primary">Sửa</Button>
        </div>
      </ListGroup.Item>
    ))
  }

  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <div className="todo-list-title">
            <h4>Todo List</h4>
            <Button variant="primary" onClick={() => handleShowModifyModal()}>
              Thêm công việc
            </Button>
          </div>
          <div className="mt-2">
            <ListGroup>
              {renderItemList()}
            </ListGroup>
          </div>
        </div>
      </div>
      <ModifyListModal
        isShowModal={isShowModifyModal}
        handleHideModal={handleHideModifyModal}
        handleSubmitForm={handleSubmitForm}
      />
      <ConfirmDeleteModal
        isShowModal={isShowConfirmModal}
        handleHideModal={handleHideConfirmModal}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default TodoList;
