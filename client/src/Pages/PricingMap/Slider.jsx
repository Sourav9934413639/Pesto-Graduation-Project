// Slider.js

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    
      <img
        src={images[activeIndex].image}
      
        style={{ width: '100%', height: '20rem' }}
      />
     
  );
};

export default Slider;