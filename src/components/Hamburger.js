import React, { useState } from 'react';

const Hamburger = ({ onUpdate }) => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const updateStatus = () => {
    setIsNavHidden(!isNavHidden);
    onUpdate && onUpdate(!isNavHidden);
  }

  return  <button 
    className="hamburger" 
    onClick={ updateStatus }
  >Menu</button>
}

export default Hamburger;