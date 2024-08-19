// src/components/Banner/Banner.jsx

import React from 'react';
import './Banner.css'; // Ensure the CSS file is correctly imported

const Banner = ({ image}) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
