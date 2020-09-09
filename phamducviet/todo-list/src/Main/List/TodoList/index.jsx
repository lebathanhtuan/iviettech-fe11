import React, { useState } from "react";
import "./style.css";
import { Button, ListGroup } from 'react-bootstrap';
import ConfirmDelete from "./ModifyListModal/ConfirmDelete"
import ModifyListModal from "./ModifyListModal";
function TodoList() {
  const [todoListData, setTodoListData] = useState(
    [
      {
        title: "1"
      },
      {
        title: "2"
      }
    ]
    )
  const [searchKey, setSearchKey] = useState("");
  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [modifyModalData, setModifyModalData] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(null);
  
  const newsTodoListData = todoListData.filter((item) => {
    return (item.title.toLowerCase()).indexOf(searchKey.toLowerCase) !== -1;
  });

  //show /hide modify
  const handleShowModifyModal = (modifyType, modifyValue, modifyIndex) => {
    setIsShowModifyModal(true);
    setModifyModalData({ type: modifyType, title: modifyValue, index: modifyIndex })
  }
  const handleHideModifyModal = () => {
    setModifyModalData({})
    setIsShowModifyModal(false);
  }
  //show /hide confirm
  const handleShowConfirmModal = (index) => {
    setIsShowConfirmModal({ index: index });
  }
  const handleHideConfirmModal = () => {
    setIsShowConfirmModal(null);
  }



  const handelDeleteTask = (index) => {
    const newToDoListData = todoListData;
    newToDoListData.splice(index, 1);
    setTodoListData([
      ...newToDoListData
    ]);
    setIsShowConfirmModal(null);
  }
  const handelSubmitForm = (value, type,index) => {
    if (type === "create") {
      setTodoListData([
        { title: value.title },
        ...todoListData,

      ]);
    }
    else {
      const newToDoListData = todoListData;
      newToDoListData.splice(index, 1, { title: value.title });
      console.log('Log: : handelSubmitForm -> value.index', value.index);
      setTodoListData([
        ...newToDoListData
      ]);
    }

    setIsShowModifyModal(null);

  }
  const handelSearch = (e) => {
    const {value} = e.target;
    setSearchKey(value);
  }
  const renderItemList = () => {
    console.log('Log: : renderItemList -> newsTodoListData', newsTodoListData);
    return newsTodoListData.map((item, itemIndex) => {
      
      if(!isShowMore && itemIndex>4){
        return null;
      }
      return (
        <ListGroup.Item key={itemIndex} className="listGroup todoList-content">
          <div>{item.title}</div>
          <div>
            <Button
              variant="primary"
              onClick={() => handleShowModifyModal("edit", item.title, itemIndex)}
            >Edit</Button>
            <Button variant="danger" onClick={() => handleShowConfirmModal(itemIndex)}>Delete</Button>
          </div>
        </ListGroup.Item>
      )
    })
  }

  return (
    <>
      <div className=" todoList  ">
        <div className="todoList-container">
          
        <div className="todoList-content mt-2" >
            <input 
              type="text" 
              className="form-control" 
              placeholder="tìm kiếm"
              onChange={(e) => handelSearch(e)}
              />
            <button className="btn btn-primary">tìm kiếm</button>
          </div>
          <div className="todoList-content">
          <p></p>
          <button className="btn btn-primary" onClick={() => handleShowModifyModal("create")}>Add</button>
        </div>

          <ListGroup>
            {renderItemList()}
          </ListGroup>
        { (!isShowMore && newsTodoListData.length>=5) && (
          <div className="d-flex justify-content-center">
            <button 
              className="btn btn-warning" 
              onClick={() => setIsShowMore(true)}
              >Hiển thị thêm</button>

          </div>
        )
          
         }
        </div>
      </div>
      <ModifyListModal
        isShowModal={isShowModifyModal}
        handleHideModal={handleHideModifyModal}
        handelSubmitForm={handelSubmitForm}
        modifyModalData={modifyModalData}
      ></ModifyListModal>
      <ConfirmDelete
        isShowModal={isShowConfirmModal}
        handleHideModal={handleHideConfirmModal}
        handelDeleteTask={handelDeleteTask}
      ></ConfirmDelete>
    </>
  );
}

export default TodoList;
