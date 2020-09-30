import {
    GET_TASK_LIST_SUCCESS,
    GET_COMPLETE_LIST_SUCCESS,
    CREATE_TASK_SUCCESS,
    EDIT_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
    ADD_TASK_TO_COMPLETE_LIST_SUCCESS,
    DELETE_TASK_FROM_TODOLIST_SUCCESS,
} from '../constants/index';
const initialState = {
    todoListData: [],
    completedListData: [],
};

function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                todoListData: [
                    ...action.payload,
                ],
            }
        }
        case GET_COMPLETE_LIST_SUCCESS: {
            return {
                ...state,
                completedListData: [
                    ...action.payload,
                ],
            }
        }
        case CREATE_TASK_SUCCESS: {
            return {
                ...state,
                todoListData: [
                    ...state.todoListData,
                    action.payload,
                ],
            }
        }
        case EDIT_TASK_SUCCESS: {
            const { id, title, description } = action.payload;
            const newTodoListData = state.todoListData;
            const taskIndex = state.todoListData.findIndex((item) => item.id === id);
            const editedTask = {
                ...state.todoListData[taskIndex],
                title,
                description,
            };
            newTodoListData.splice(taskIndex, 1, editedTask);
            return {
                ...state,
                todoListData: [
                    ...newTodoListData,
                ],
            }
        }
        case DELETE_TASK_SUCCESS: {
            const { id } = action.payload;
            const newTodoListData = state.todoListData;
            const taskIndex = state.todoListData.findIndex((item) => item.id === id);
            newTodoListData.splice(taskIndex, 1)
            return {
                ...state,
                todoListData: [
                    ...newTodoListData,
                ],
            }
        }
        case ADD_TASK_TO_COMPLETE_LIST_SUCCESS: {
            return {
                ...state,
                completedListData: [
                    ...state.completedListData,
                    action.payload,
                ],
            }
        }
        case DELETE_TASK_FROM_TODOLIST_SUCCESS: {
            const { id } = action.payload;
            const newTodoListData = state.todoListData;
            const taskIndex = state.todoListData.findIndex((item) => item.id === id);
            newTodoListData.splice(taskIndex, 1);
            return {
                ...state,
                todoListData: [
                    ...newTodoListData,
                ],
            }
        }
        default: {
            return state;
        }
    }
}

export default todoListReducer;