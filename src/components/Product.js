import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

class Product extends React.Component {
  renderRating = () => {
    const { rating } = this.props;
    const remainder = rating * 10 % 10;
    const floor = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= floor + 1; i++) {
      if (i <= floor) {
        stars.push(<FontAwesomeIcon key={ i } icon={ faStar } color="#ffba00" />);
      } else if (remainder > 0) {
        stars.push(<FontAwesomeIcon key={ i } icon={ faStarHalf } color="#ffba00"/>)
      }
    }

    return stars;
  }

  render() {
    const { id, img, name, category, price, rating } = this.props;

    return (
      <div className="product">
        <Link to={ '/product/' + id } className="product__img">
          <img src={ img } alt="Product 1" />
        </Link>
        <div className="product-info">
          {rating && <div className="product__rating">{ this.renderRating() }</div>}
          <div className="product__category">{ category }</div>
          <div className="product__name">{ name }</div>
          <div className="product__price">{ price }</div>
        </div>
      </div>
    )
  }
}

export default Product;