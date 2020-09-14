import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../util/history';

import { getProductList } from '../../redux/actions';

const productData = [
  {
    id: 1,
    name: 'iphone 12',
  },
  {
    id: 2,
    name: 'galaxy note 10',
  }
];

function Products(props) {
  const { productList, getList } = props;

  useEffect(() => {
    getList(productData);
  }, []);

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
  return (
    <div className="p-4">
      Product List
      <ul className="list-group mt-2" style={{ width: 500 }}>
        {renderProductList()}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('Log: mapStateToProps -> state', state);
  const { productList } = state;
  return {
    productList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (params) => dispatch(getProductList(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
