import React from 'react';
import products from '../utils/products';

const ProductDetail = ({ match }) => {
  const productId = match.params.productId;
  const product = products.filter(pro => pro.id === productId)[0];

  return (
    <div className="product-detail">
    <h2>{ product.name }</h2>
    <img src={ product.img } alt={ product.name } />
    </div>
  )
}

export default ProductDetail;