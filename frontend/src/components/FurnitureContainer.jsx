import React from 'react';
import { furnitureData } from '../Data/Data';
import Card from './Card/Card1';
import './Card/Conatiner.css'
import { useRef } from 'react';

const FurnitureContainer = () => {
    const containerRef = useRef(null);
  
    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust 'left' value for scroll amount
      }
    };
  
    return (
      <div className="container-wrapper">
          
         <div className="container-header">
        <h2>Furniture Collection</h2>
       
      </div>

        <button className="scroll-button" onClick={scrollRight}>
          <i className="bi bi-chevron-right"></i>
        </button>
        <div className="container" ref={containerRef}>
          {furnitureData.map(item => (
            <Card key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    );
  };
  

export default FurnitureContainer;