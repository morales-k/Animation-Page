import React from 'react';
import Circle from './Circle';

const Header = () => {
  return (
    <div className="header">
      <Circle size="xl" />
      <Circle size="lg" />
      <Circle size="sm" />
      <h1>CSS Animations</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Venenatis lectus magna fringilla urna porttitor rhoncus dolor 
      purus non.
      </p>
    </div>
  )
}

export default Header;