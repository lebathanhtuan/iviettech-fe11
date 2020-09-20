import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
} from '../constants';

function* getProductListSaga(){
  try {
    const response = yield axios.get('http://localhost:3001/products');
    const data = response.data;
    yield put({
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}

export default function* mySaga(){
  yield takeEvery(GET_PRODUCT_LIST, getProductListSaga);
}