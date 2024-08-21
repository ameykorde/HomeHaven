import React from 'react';
import "./CategoryCard.css";

const CategoryCard = ({ name, icon, onClick }) => {
  return (
    <div className="col" role="button" onClick={onClick}>
      <div className="card" style={{backgroundColor:"#f6f5f2"}}> {/* Apply inline style */}
        <div className="card-body text-center">
          <span className="material-symbols-outlined col">{icon}</span>
          <p className="card-title mt-2 mb-0">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
