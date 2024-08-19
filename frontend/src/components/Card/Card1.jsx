import React from 'react';
import './Card.css';

const Card = ({ name, image }) => {
  return (
    <div className="card1">
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Card;
