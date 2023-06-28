import React from 'react';

const Circle = (props) => {
  const { size } = props;

  return (
    <div className={`circle-${size}`}></div>
  )
}

export default Circle;