import React from 'react';
import Product from './Product';
import data from '../utils/recentProducts';

function RecentProducts() {
  return (
    <div className="recent-products">
      <h3 className="block-title">Recent Products</h3>
      <div className="recent-products-list">
        {data.map((product, idx) =>
          <Product key={ idx } { ...product } />
        )}
      </div>
    </div>
  )
}

export default RecentProducts;