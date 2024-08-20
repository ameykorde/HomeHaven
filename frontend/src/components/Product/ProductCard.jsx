import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ image, title, description, price, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cont" role="button" onClick={handleClick}>
      <div className="product-card">
        <div className="product-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title">{title}</h2>
          <p className="product-card__description">{description}</p>
          <div className="product-card__price-row">
            <span className="product-card__price">{price}</span>
            <button className="product-card__btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
