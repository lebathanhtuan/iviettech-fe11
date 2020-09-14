import React from 'react';
import history from '../history'

function Products() {
    const productData = [
        {
            id: 1,
            name: 'iphone X'
        },
        {
            id: 2,
            name: 'iphone XS'
        },
        {
            id: 3,
            name: 'iphone 11'
        },
        {
            id: 4,
            name: 'iphone 12 Pro'
        }
    ]
    const renderProductList = () => {
        return productData.map((product, productIndex) => (
            <>
                <div
                    key={`product-${product.id}-${productIndex}`}
                    onClick={() => history.push(`/sanpham/${product.id}`)}
                >
                    {product.name}
                </div>
            </>
        ))
    }
    return (
        <div>
            Products
            <div>
                {renderProductList()}
            </div>
        </div>
    );
}

export default Products;