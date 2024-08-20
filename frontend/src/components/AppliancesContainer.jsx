import React from 'react';
import { appliancesData } from '../Data/Data';
import Card from './Card/Card1';
import './FurnitureContainer.css'; // Common CSS for containers
import { useRef } from 'react';

const AppliancesContainer = () => {
    const containerRef = useRef(null);
  
    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust 'left' value for scroll amount
      }
    };
  
    return (
      <div className="container-wrapper">
         <div className="container-header">
        <h2>HomeAppliences Collection</h2>
       
      </div>
        <button className="scroll-button" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </button>
        <div className="container furniture-appliances-container" ref={containerRef}>
          {appliancesData.map(item => (
            <Card key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    );
  };
  

export default AppliancesContainer;
