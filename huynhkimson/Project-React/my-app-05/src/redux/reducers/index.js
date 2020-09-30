import { combineReducers } from 'redux';
import productReducer from './products.reducer';
import todoListReducer from './todoList.reducer';

export default combineReducers({
    productReducer,
    todoListReducer,
})