import React from 'react';
import DotToPetal from '../Animations/DotToPetal/index.jsx';
import Transfer from '../Animations/Transfer/index.jsx';
import Animation from './Animation.jsx';


const AnimationList = () => {
  const animations = [
    {
      name: 'Dot to Petal',
      component: <DotToPetal />,
      containerId: 'dotContainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      length: 10
    },
    {
      name: 'Transfer',
      component: <Transfer />,
      containerId: 'dataContainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      length: 14
    },
  ];

  return (
    
    animations.map(animation => {
      return (
        <Animation
          key={animation.containerId} 
          animation={animation} />
      )
    })
  )
}

export default AnimationList;