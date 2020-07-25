import React from 'react';
import products from '../utils/products';
import Product from './Product';

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product, idx) =>
        <Product key={ idx } { ...product } myProp='ABC' />
      )}
    </div>
  )
}

export default ProductList;