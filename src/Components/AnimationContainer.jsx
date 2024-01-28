import React from 'react';
import ghLogo from "../assets/images/github.svg";
import DotToPetal from '../Animations/DotToPetal/index.jsx';
import Transfer from '../Animations/Transfer/index.jsx';
import PlayPauseButton from './PlayPauseButton.jsx';


const AnimationContainer = () => {
  const animations = [
    {
      name: 'Dot to Petal',
      component: <DotToPetal />,
      containerId: 'dotContainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      name: 'Transfer',
      component: <Transfer />,
      containerId: 'dataContainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
  ];

  return (
    
    animations.map(animation => {
      return (
        <div key={animation.name} className="animation-container">
            <h1>{animation.name}</h1>
            <div className="animation">
              {animation.component}
            </div>
            <div className="btn-container">
              <PlayPauseButton containerId={animation.containerId} />
              <a className="btn" href="#">
                View Code
                <img src={ghLogo} alt="View animation code on GitHub." />
              </a>
            </div>
            <p>
              {animation.description}
            </p>
          </div>
      )
    })
  )
}

export default AnimationContainer;