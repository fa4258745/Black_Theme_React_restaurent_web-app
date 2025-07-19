// src/components/ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: '400px',
        backgroundColor: '#666',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;
