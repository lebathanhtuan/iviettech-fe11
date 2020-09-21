import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_TASK_LIST,
  GET_TASK_LIST_SUCCESS,
  GET_TASK_LIST_FAIL,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAIL,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
} from '../constants';

const apiUrl = 'http://localhost:3001';

function* getTaskListSaga(action){
  try {
    const response = yield axios.get(`${apiUrl}/todoList`);
    const data = response.data;
    console.log('Log: : function*getTaskListSaga -> data', data);
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

function* createTaskSaga(action){
  try {
    const response = yield axios.post(`${apiUrl}/todoList`, action.payload);
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

function* editTaskSaga(action){
  try {
    const { id, title, description } = action.payload;
    const response = yield axios.put(`${apiUrl}/todoList/${id}`, { title, description });
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

function* deleteTaskSaga(action){
  try {
    const { id } = action.payload;
    yield axios.delete(`${apiUrl}/todoList/${id}`);
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

export default function* todoListSaga(){
  yield takeEvery(GET_TASK_LIST, getTaskListSaga);
  yield takeEvery(CREATE_TASK, createTaskSaga);
  yield takeEvery(EDIT_TASK, editTaskSaga);
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
}
