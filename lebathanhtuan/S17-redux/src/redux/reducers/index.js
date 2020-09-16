import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import todoListReducer from './todoList.reducer';

export default combineReducers({
  productReducer,
  todoListReducer,
})
