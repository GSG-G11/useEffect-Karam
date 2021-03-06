import React, { useEffect, useState } from 'react';
import './style.css'

const SecondEx = () => {
  const [dimension, setDimension] = useState({
    x: 0,
    y: 0
  });

  const halfDimension = window.innerWidth / 2;

  const handleResize = (e) => {
    setDimension({
      x: e.clientX,
      y: e.clientY
    });
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleResize);
    }
  })

  return (
    <div className="second" style={{backgroundColor: dimension.x > halfDimension ? 'tomato' : 'blue'}}>
      <h1>Second Exersise</h1>
      <p className="view">I am now on X: {dimension.x} and Y: {dimension.y}</p>
    </div>
  )
}

export default SecondEx;