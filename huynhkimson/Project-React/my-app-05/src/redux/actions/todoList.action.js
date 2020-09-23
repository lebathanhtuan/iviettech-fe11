import {
    GET_TASK_LIST,
    GET_COMPLETE_LIST,
    CREATE_TASK,
    EDIT_TASK,
    DELETE_TASK,
    ADD_TASK_TO_COMPLETE_LIST,
    DELETE_TASK_FROM_TODOLIST,
} from '../constants/index';
export function getTaskList(params) {
    return {
        type: GET_TASK_LIST,
        payload: params,
    }
}
export function getCompleteList(params) {
    return {
        type: GET_COMPLETE_LIST,
        payload: params,
    }
}
export function createTask(params) {
    return {
        type: CREATE_TASK,
        payload: params,
    }
}
export function editTask(params) {
    return {
        type: EDIT_TASK,
        payload: params,
    }
}
export function deleteTask(params) {
    return {
        type: DELETE_TASK,
        payload: params,
    }
}
export function addCompleteTask(params) {
    return {
        type: ADD_TASK_TO_COMPLETE_LIST,
        payload: params,
    }
}
export function deleteCompleteTask(params) {
    return {
        type: DELETE_TASK_FROM_TODOLIST,
        payload: params,
    }
}
// export function unCompleteTask(params) {
//     return {
//         type: UN_COMPLETE_TASK,
//         payload: params,
//     }
// }
