import React from 'react';
import ghLogo from "../assets/images/github.svg";

const Animation = () => {
  return (
    <div className="animation-container">
      <h1>Animation</h1>
      <div className="animation"></div>
      <div className="btn-container">
        <button className="btn" type="button">Play</button>
        <a className="btn" href="#">
          View Code
          <img src={ghLogo} alt="View animation code on GitHub." />
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Venenatis lectus magna fringilla urna 
        porttitor rhoncus dolor purus non.
      </p>
    </div>
  )
}

export default Animation;