import React, { useState } from 'react';

const PlayPauseButton = (props) => {
  const [paused, setPaused] = useState(false);
  const { containerId } = props;

  // Toggles the pause class for a container and sub-children.
  const togglePlayState = () => {
    const animation = document.querySelector(`#${containerId}`);
    const animationChildren = animation.children;
    
    animation.classList.toggle('paused');
    
    // Check for children & grandchildren.
    for (let i = 0; i < animationChildren.length; i++) {
      const grandchildren = animationChildren[i].children;
      animationChildren[i].classList.toggle('paused');

      if (grandchildren.length > 0) {
        for (let j = 0; j < grandchildren.length; j++) {
          grandchildren[j].classList.toggle('paused');
        }
      }
    }
    setPaused(!paused);
  };

  return (
    <button 
    onClick={() => togglePlayState()} 
    className="btn" 
    type="button">{paused ? 'Play' : 'Pause'}</button>
  )
}

export default PlayPauseButton;