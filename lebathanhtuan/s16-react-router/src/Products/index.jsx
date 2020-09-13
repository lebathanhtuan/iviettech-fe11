import React from 'react';
import history from '../history';

function Products() {
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
  const renderProductList = () => {
    return productData.map((product, productIndex) => (
      <div
        key={`product-${product.id}-${productIndex}`}
        onClick={() => history.push(`/product/${product.id}`)}
      >
        {product.name}
      </div>
    ))
  }
  return (
    <div>
      Product List
      {renderProductList()}
    </div>
  );
}

export default Products;
