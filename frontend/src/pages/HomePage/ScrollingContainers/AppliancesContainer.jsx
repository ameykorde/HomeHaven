import React from 'react';
import { appliancesData } from '../../../Data/Data';
import Card from '../ScrollingCard/Card';
import './CommonContainer.css'; // Shared CSS for both containers
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const AppliancesContainer = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCardClick = () => {
    navigate('/appliances'); // Navigate to the /products route
  };

  return (
    <div className="container-wrapper">
      <div className="container-header">
        <h2>Home Appliances Collection</h2>
      </div>
      <button className="scroll-button" onClick={scrollRight}>
        <i className="bi bi-chevron-right"></i>
      </button>
      <div className="furniture-appliances-container" ref={containerRef}>
        {appliancesData.map(item => (
          <Card key={item.id} name={item.name} image={item.image} onClick={handleCardClick}  />
        ))}
      </div>
    </div>
  );
};

export default AppliancesContainer;
