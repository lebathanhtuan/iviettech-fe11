import React from 'react';

function ProductDetail(props) {
  console.log('Log: ProductDetail -> props', props);
  const productId = props.match.params.id;

  return (
    <div>
      ProductDetail - {productId}
    </div>
  );
}

export default ProductDetail;
