import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Hamburger from './Hamburger';

const Header = (props) => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  console.log('header', props);

  return (
    <header className="main-header">
      <Logo />
      <Navigation isHidden={ isNavHidden } />
      <Hamburger onUpdate={ isHidden => setIsNavHidden(isHidden) } />
      <div className="icons"></div>
    </header>
  )
}

// class Header extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       isNavDisplayed: false,
//       test: 'AAAA'
//     }
//   }

//   updateNavStatus = () => {
//     const { isNavDisplayed } = this.state;
//     this.setState({ isNavDisplayed: !isNavDisplayed })
//   }

//   render() {
//     const { isNavDisplayed } = this.state;
//     return (
//       <header className="main-header">
//         <Logo />
//         {isNavDisplayed && <Navigation/>}
//         <button className="hamburger" onClick={ this.updateNavStatus }>Menu</button>
//         <div className="icons">
          
//         </div>
//       </header>
//     )
//   }
// }

export default Header;