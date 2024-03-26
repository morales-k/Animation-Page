import React from 'react';
import Animation from './Animation.jsx';
import { animations } from "../Animations/index.jsx";


const AnimationList = () => {
  return (
    <div className="animation-wrapper">
      {
        animations.map(animation => {
          return (
            <Animation
              key={animation.containerId} 
              animation={animation} />
          )
        })
      }
    </div>
  )
}

export default AnimationList;