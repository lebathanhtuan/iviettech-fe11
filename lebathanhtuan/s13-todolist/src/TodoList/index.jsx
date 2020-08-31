import React, { useState } from 'react';
import {
  Button,
  ListGroup,
  Modal,
  Form as FormBootstrap,
} from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ModifyListModal from '../ModifyListModal';

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
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowModal = () => {
    setIsShowModal(true);
  }

  const handleHideModal = () => {
    setIsShowModal(false);
  }

  const handleSubmitForm = (values) => {
    setTodoListData([
      {
        title: values.title,
      },
      ...todoListData,
    ]);
    setIsShowModal(false);
  }

  const renderItemList = () => {
    return todoListData.map((item, itemIndex) => (
      <ListGroup.Item key={itemIndex} className="todo-item-container">
        <p>{item.title}</p>
        <div className="todo-item-action">
          <Button variant="outline-danger" className="mr-2">Xóa</Button>
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
            <Button variant="primary" onClick={() => handleShowModal()}>
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
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default TodoList;
