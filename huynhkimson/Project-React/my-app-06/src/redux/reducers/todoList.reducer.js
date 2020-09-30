import {
    // GET_TASK_LIST_SUCCESS,
    // GET_COMPLETE_LIST_SUCCESS,
    CREATE_TASK,
    EDIT_TASK,
    DELETE_TASK,
    COMPLETE_TASK,
    UN_COMPLETE_TASK
    // ADD_TASK_TO_COMPLETE_LIST_SUCCESS,
    // DELETE_TASK_FROM_TODOLIST_SUCCESS,
} from '../constants/index';
const initialState = {
    todoListData: [
        {
            id: 1,
            title: 'Nội dung 1',
            description: 'Mô tả 1',
        },
        {
            id: 2,
            title: 'Nội dung 2',
            description: 'Mô tả 2',
        },
        {
            id: 3,
            title: 'Nội dung 3',
            description: 'Mô tả 3',
        },
        {
            id: 4,
            title: 'Nội dung 4',
            description: 'Mô tả 4',
        },
        {
            id: 5,
            title: 'Nội dung 5',
            description: 'Mô tả 5',
        },
    ],
    completedListData: [],
};

function todoListReducer(state = initialState, action) {
    switch (action.type) {
        // case GET_TASK_LIST_SUCCESS: {
        //     return {
        //         ...state,
        //         todoListData: [
        //             ...action.payload,
        //         ],
        //     }
        // }
        // case GET_COMPLETE_LIST_SUCCESS: {
        //     return {
        //         ...state,
        //         completedListData: [
        //             ...action.payload,
        //         ],
        //     }
        // }
        case CREATE_TASK: {
            return {
                ...state,
                todoListData: [
                    ...state.todoListData,
                    action.payload,
                ],
            }
        }
        case EDIT_TASK: {
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
        case DELETE_TASK: {
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

        case COMPLETE_TASK: {
            const { completeItem } = action.payload;
            const newTodoListData = state.todoListData;
            const taskIndex = state.todoListData.findIndex((item) => item.id === completeItem.id);
            newTodoListData.splice(taskIndex, 1);
            return {
                ...state,
                todoListData: [
                    ...newTodoListData,
                ],
                completedListData: [
                    completeItem,
                    ...state.completedListData,
                ],
            }
        }

        case UN_COMPLETE_TASK: {
            const { unCompleteItem } = action.payload;
            const newTodoListData = state.completedListData;
            const taskIndex = state.completedListData.findIndex((item) => item.id === unCompleteItem.id);
            newTodoListData.splice(taskIndex, 1);
            return {
                ...state,
                completedListData: [
                    ...newTodoListData,
                ],
                todoListData: [
                    unCompleteItem,
                    ...state.todoListData,
                ],
            }
        }

        // case ADD_TASK_TO_COMPLETE_LIST_SUCCESS: {
        //     return {
        //         ...state,
        //         completedListData: [
        //             ...state.completedListData,
        //             action.payload,
        //         ],
        //     }
        // }
        // case DELETE_TASK_FROM_TODOLIST_SUCCESS: {
        //     const { id } = action.payload;
        //     const newTodoListData = state.todoListData;
        //     const taskIndex = state.todoListData.findIndex((item) => item.id === id);
        //     newTodoListData.splice(taskIndex, 1);
        //     return {
        //         ...state,
        //         todoListData: [
        //             ...newTodoListData,
        //         ],
        //     }
        // }
        default: {
            return state;
        }
    }
}

export default todoListReducer;