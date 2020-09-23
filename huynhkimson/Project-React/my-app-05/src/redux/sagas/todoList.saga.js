import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_TASK_LIST,
    GET_TASK_LIST_SUCCESS,
    GET_TASK_LIST_FAIL,

    GET_COMPLETE_LIST,
    GET_COMPLETE_LIST_SUCCESS,
    GET_COMPLETE_LIST_FAIL,

    CREATE_TASK,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,

    EDIT_TASK,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAIL,

    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAIL,

    ADD_TASK_TO_COMPLETE_LIST,
    ADD_TASK_TO_COMPLETE_LIST_SUCCESS,
    ADD_TASK_TO_COMPLETE_LIST_FAIL,

    DELETE_TASK_FROM_TODOLIST,
    DELETE_TASK_FROM_TODOLIST_SUCCESS,
    DELETE_TASK_FROM_TODOLIST_FAIL,

} from '../constants';

const apiUrl = 'http://localhost:3001';

function* getTaskListSaga(action) {
    try {
        const response = yield axios.get(`${apiUrl}/todoListData`);
        const data = response.data;
        yield put({
            type: GET_TASK_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: GET_TASK_LIST_FAIL,
            payload: error,
        });
    }
}

function* getCompleteListSaga(action) {
    try {
        const response = yield axios.get(`${apiUrl}/completedListData`);
        const data = response.data;
        yield put({
            type: GET_COMPLETE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: GET_COMPLETE_LIST_FAIL,
            payload: error,
        });
    }
}

function* addCompleteSaga(action) {
    try {
        const { id, title, description } = action.payload;
        const response = yield axios.post(`${apiUrl}/completedListData/`, { id, title, description });
        const data = response.data;
        yield put({
            type: ADD_TASK_TO_COMPLETE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: ADD_TASK_TO_COMPLETE_LIST_FAIL,
            payload: error,
        });
    }
}

function* deleteTaskFromTodoListSaga(action) {
    try {
        const { id } = action.payload;
        yield axios.delete(`${apiUrl}/todoListData/${id}`);
        yield put({
            type: DELETE_TASK_FROM_TODOLIST_SUCCESS,
            payload: { id },
        });
    } catch (error) {
        yield put({
            type: DELETE_TASK_FROM_TODOLIST_FAIL,
            payload: error,
        });
    }
}

function* createTaskSaga(action) {
    try {
        const { title, description } = action.payload;
        const response = yield axios.post(`${apiUrl}/todoListData`, { title, description });
        const data = response.data;
        yield put({
            type: CREATE_TASK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: CREATE_TASK_FAIL,
            payload: error,
        });
    }
}

function* editTaskSaga(action) {
    try {
        const { id, title, description } = action.payload;
        const response = yield axios.put(`${apiUrl}/todoListData/${id}`, { title, description });
        const data = response.data;
        yield put({
            type: EDIT_TASK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: EDIT_TASK_FAIL,
            payload: error,
        });
    }
}

function* deleteTaskSaga(action) {
    try {
        const { id } = action.payload;
        yield axios.delete(`${apiUrl}/todoListData/${id}`);
        yield put({
            type: DELETE_TASK_SUCCESS,
            payload: { id },
        });
    } catch (error) {
        yield put({
            type: DELETE_TASK_FAIL,
            payload: error,
        });
    }
}

export default function* todoListSaga() {
    yield takeEvery(GET_TASK_LIST, getTaskListSaga);
    yield takeEvery(GET_COMPLETE_LIST, getCompleteListSaga);
    yield takeEvery(CREATE_TASK, createTaskSaga);
    yield takeEvery(EDIT_TASK, editTaskSaga);
    yield takeEvery(DELETE_TASK, deleteTaskSaga);
    yield takeEvery(ADD_TASK_TO_COMPLETE_LIST, addCompleteSaga);
    yield takeEvery(DELETE_TASK_FROM_TODOLIST, deleteTaskFromTodoListSaga);
}