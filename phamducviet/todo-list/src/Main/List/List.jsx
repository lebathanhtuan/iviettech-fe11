import React, { useState } from "react";
import TodoList from "./TodoList";
import "./style.css";

function List(props) {
 
 
  return (
    <div className=" list container ">
     
    
    <div className="list-container">
      <div >
          <h2>Todo List</h2>
          <TodoList  ></TodoList>
        </div>
    </div>
    
    </div>
  );
}

export default List;
