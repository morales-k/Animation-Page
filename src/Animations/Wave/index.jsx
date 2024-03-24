import React, { useEffect, useRef, useState } from 'react';
import './index.css';

function Wave() {
  const [totalWaves, setTotalWaves] = useState([]);
  const waveRef = useRef(null);

  useEffect(() => {
    calculateTotalWaves();
  }, []);

  useEffect(() => {
    if (totalWaves.length > 0) {
      addWaveStyles();
    }
  }, [totalWaves]);

  function calculateTotalWaves () {
    const animationWidth = waveRef.current.scrollWidth;
    const waveSize = 16;
    const total = Math.ceil(animationWidth / waveSize);
    let waves = [];

    for (let i = 0; i < total; i++) {
      waves.push(1);
    }
    setTotalWaves(waves);
  };

  // Creates a CSS stylesheet with styles for each wave.
  function addWaveStyles() {
    const waves = document.querySelectorAll(".wave");
    const waveColors = ["#BF45AB", "#67428C", "#302A59", "#7991D9", "#024873"];
    let currentBgColor = waveColors[0];
    let waveStyles = "";

    waves.forEach((wave, index) => {
      const colorIndex = waveColors.indexOf(currentBgColor);
      const style = 
      `.wave:nth-child(${index+1}) {
        animation-delay: ${(index + 1) / 2}s;
        background-color: ${currentBgColor};
      }`;
      waveStyles += style;

      if (colorIndex < waveColors.length - 1) {
        currentBgColor = waveColors[waveColors.indexOf(currentBgColor) + 1];
      } else {
        currentBgColor = waveColors[0];
      }
    });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = waveStyles;
    document.head.appendChild(styleSheet);
  };

  return (
    <div ref={waveRef} id="waveContainer" className="paused">
      {
        totalWaves && totalWaves.map((wave, index) => {
          return (
              <span key={index} className="wave paused">
              </span>
          );
        })
      }
    </div>
  )
}

export default Wave;