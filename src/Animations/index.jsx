import React from 'react';
import DotToPetal from "./DotToPetal/index.jsx"
import Transfer from './Transfer/index.jsx';
import Wave from './Wave/index.jsx';

export const animations = [
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
  {
    name: 'Wave',
    component: <Wave />,
    containerId: 'waveContainer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    length: null
  }
];