import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { furnitureData } from '../../../Data/Data';
import Card from '../ScrollingCard/Card';
import './CommonContainer.css'; // Shared CSS for both containers

const FurnitureContainer = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClick = () => {
    navigate('/furniture'); // Navigate to the /products route
  };

  return (
    <div className="container-wrapper">
      <div className="container-header">
        <h2>Furniture Collection</h2>
      </div>
      <div className="furniture-appliances-container" ref={containerRef}>
        {furnitureData.map(item => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            onClick={handleCardClick} // Pass the click handler to the Card component
          />
        ))}
      </div>
      <button className="scroll-button" onClick={scrollRight}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default FurnitureContainer;
