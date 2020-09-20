import {
  GET_TASK_LIST_SUCCESS,
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  COMPLETE_TASK,
} from '../constants';

const initialState = {
  todoList: [],
  completedList: [],
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASK_LIST_SUCCESS: {
      return {
        ...state,
        todoList: [
          ...action.payload,
        ],
      }
    }
    case CREATE_TASK_SUCCESS: {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ],
      }
    }
    case EDIT_TASK_SUCCESS: {
      const { id, title, description } = action.payload;
      const newTodoListData = state.todoList;
      const taskIndex = state.todoList.findIndex((item) => item.id === id);
      const editedTask = {
        ...state.todoList[taskIndex],
        title,
        description,
      };
      newTodoListData.splice(taskIndex, 1, editedTask);
      return {
        ...state,
        todoList: [
          ...newTodoListData,
        ],
      }
    }
    case DELETE_TASK_SUCCESS: {
      const { id } = action.payload;
      const newTodoListData = state.todoList;
      const taskIndex = state.todoList.findIndex((item) => item.id === id);
      newTodoListData.splice(taskIndex, 1);
      return {
        ...state,
        todoList: [
          ...newTodoListData,
        ],
      }
    }
    case COMPLETE_TASK: {
      const { completeItem } = action.payload;
      const newTodoListData = state.todoList;
      const taskIndex = state.todoList.findIndex((item) => item.id === completeItem.id);
      newTodoListData.splice(taskIndex, 1);
      return {
        ...state,
        todoList: [
          ...newTodoListData,
        ],
        completedList: [
          completeItem,
          ...state.completedList,
        ],
      }
    }
    default: {
      return state;
    }
  }
}
