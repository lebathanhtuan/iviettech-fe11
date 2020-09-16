import React from 'react';
import { connect } from 'react-redux';
import history from '../../util/history';

function Home(props) {
  const { productList, todoList } = props;

  const renderProductList = () => {
    return productList.map((product, productIndex) => (
      <li
        key={`product-${product.id}-${productIndex}`}
        className="list-group-item d-flex align-items-center justify-content-between"
      >
        <div>{product.name}</div>
        <button className="btn btn-outline-primary" onClick={() => history.push(`/product/${product.id}`)}>
          Chi tiết
        </button>
      </li>
    ))
  }

  const renderToDoList = () => {
    return todoList.map((task, taskIndex) => (
      <li
        key={`task-${task.id}-${taskIndex}`}
        className="list-group-item d-flex align-items-center justify-content-between"
      >
        <div>{task.title}</div>
      </li>
    ))
  }

  return (
    <div className="p-4">
      HOME/ Product List
      <ul className="list-group mt-2" style={{ width: 500 }}>
        {renderProductList()}
      </ul>
      <ul className="list-group mt-2" style={{ width: 500 }}>
        {renderToDoList()}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { productList } = state.productReducer;
  const { todoList } = state.todoListReducer;
  return {
    productList,
    todoList,
  }
};

export default connect(mapStateToProps)(Home);
