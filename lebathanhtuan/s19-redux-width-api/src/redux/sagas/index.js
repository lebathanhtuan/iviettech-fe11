import { fork } from 'redux-saga/effects';

import productSaga from './product.saga';
import todoListSaga from './todoList.saga';

export default function* mySaga() {
  yield fork(productSaga);
  yield fork(todoListSaga);
}
