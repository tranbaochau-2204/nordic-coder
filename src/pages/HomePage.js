import React from 'react';
import ProductList from '../components/ProductList';

class HomePage extends React.Component {
  render() {
    return <div className="home-page">
      <ProductList { ...this.props } />
    </div>
  }
}

export default HomePage;