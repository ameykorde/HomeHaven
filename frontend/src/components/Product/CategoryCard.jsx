import "./CategoryCard.css";

const CategoryCard = ({ name, icon }) => {
  return (
    <div className="col" role="button">
      <div className="card">
        <div className="card-body text-center">
          <span className="material-symbols-outlined col">{icon}</span>
          <p className="card-title mt-2 mb-0">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
