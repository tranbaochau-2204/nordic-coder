import React from 'react';
const logo = require('../images/logo_shop.png');

class Logo extends React.Component {
  render() {
    return (
      <h1 className="logo">
        <a href="/" className="logo-link"><img src={ logo } alt="aaa" /></a>
      </h1>
    )
  }
}

export default Logo;