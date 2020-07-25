import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    const { isHidden } = this.props;

    return (
      <nav className={ `nav ${ isHidden ? " hidden" : "" }` }>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/giphy" className="nav-link">Giphy</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;