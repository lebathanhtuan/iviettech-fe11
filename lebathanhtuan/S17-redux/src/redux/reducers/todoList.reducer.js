import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
} from '../constants';

const initialState = {
  todoList: [
    {
      id: 1,
      title: 'Viết code',
      description: 'Ahihi 1',
    },
    {
      id: 2,
      title: 'Dạy online',
      description: 'Ahihi 2',
    },
  ],
  completedList: [],
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK: {
      return {
        ...state,
        todoList: [
          action.payload,
          ...state.todoList,
        ],
      }
    }
    case EDIT_TASK: {
      console.log('Log: myReducer -> myReducer', { state, action });
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
    case DELETE_TASK: {
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
