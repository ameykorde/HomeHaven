import React from 'react';
import './Card.css';

const Card = ({ name, image, onClick }) => {
  return (
    <div className="custom-scrolling-card" onClick={onClick}>
      <img src={image} alt={name} className="custom-scrolling-card-img" />
      <div className="custom-scrolling-card-body">
        <h5 className="custom-scrolling-card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Card;
