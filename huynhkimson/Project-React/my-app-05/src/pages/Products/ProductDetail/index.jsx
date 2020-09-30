import React from 'react';

function ProductDetail({ match }) {
    const productId = match.params.id
    return (
        <div>
            ProductDetail - {productId}
        </div>
    );
}

export default ProductDetail;

