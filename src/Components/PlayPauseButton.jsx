import React, { useState, useEffect } from 'react';

const PlayPauseButton = (props) => {
  const [animation, setAnimation] = useState(null);
  const [paused, setPaused] = useState(true);
  let [animationCount, setAnimationCount] = useState(0);
  const { containerId, length, setRefresh } = props;

  useEffect(() => {
    if (animation === null) {
      const animation = document.querySelector(`#${containerId}`);
      setAnimation(animation);
      detectAnimationPlayState(animation);
    }
  }, [containerId]);

  // Set listener to detect animation play state.
  const detectAnimationPlayState = (animation) => {
    animation.addEventListener("animationend", () => {
      setAnimationCount(animationCount += 1);

      // Length is the number of sub-animations that a complete animation contains.
      if (animationCount >= length) {
        togglePlayState(animation);
        setPaused(true);
        setAnimationCount(0);
        setRefresh(true);
      }
    });
  }

  // Toggles the pause class for a container and sub-children.
  const togglePlayState = (animation) => {
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
  };

  const handlePlayPause = (animation) => {
    togglePlayState(animation);
    setPaused(!paused);
  };

  return (
    <button 
    onClick={() => handlePlayPause(animation)} 
    className="btn" 
    type="button">{paused ? 'Play' : 'Pause'}</button>
  )
}

export default PlayPauseButton;