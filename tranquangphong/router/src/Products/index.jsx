import React from 'react';
import history from '../history';

function Products() {
  const productData = [
    {
      id: 1,
      name: 'Iphone X'
    },
    {
      id: 2,
      name: 'Samsung Note 10'
    },
    {
      id: 3,
      name: 'Nokia 6 plus'
    },
  ]

  const renderProductList = () => {
    return productData.map((product, productIndex) => (
      <div
        key={`product-${product.id}-${productIndex}`}
        onClick={() => history.push(`/product/${product.id}`)}
      >
        {product.name}
      </div>
    ));
  }

  return (
    <div>
      Products
      {renderProductList()}
    </div>
  );
}

export default Products;
