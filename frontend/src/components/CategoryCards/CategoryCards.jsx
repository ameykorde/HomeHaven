import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCards.css';

const CategoryCards = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="category-cards">
      <div className="card category-card" onClick={() => handleNavigation('/furniture')}>
        <img src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Furniture" />
        <div className="card-body">
          <h5 className="card-title">Furniture</h5>
          <p className="card-text">Explore our collection of stylish furniture for your home.</p>
        </div>
      </div>

      <div className="card" onClick={() => handleNavigation('/appliances')}>
        <img src="https://images.pexels.com/photos/7027974/pexels-photo-7027974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Home Appliances" />
        <div className="card-body">
          <h5 className="card-title">Home Appliances</h5>
          <p className="card-text">Discover the latest home appliances for your kitchen and home.</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
