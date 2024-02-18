import React, { useState, useEffect } from 'react';
import ghLogo from "../assets/images/github.svg";
import PlayPauseButton from './PlayPauseButton.jsx';

const Animation = (props) => {
  const [animation, setAnimation] = useState(props.animation);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      const refreshedAnimation = refreshAnimation();
      setAnimation(props.animation);
      setRefresh(false);
    }
  }, [refresh]);

  const refreshAnimation = async () => {
    setAnimation(null);
    const refreshed = await props.animation;
    return refreshed;
  };

  return (
    <div key={animation.name} className="animation-container">
      <h1>{animation.name}</h1>
      <div className="animation">
        { !refresh && animation.component }
      </div>
      <div className="btn-container">
        { !refresh && 
          <PlayPauseButton 
            containerId={animation.containerId} 
            length={animation.length}
            setRefresh={setRefresh}  
          />
        }
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
}

export default Animation;