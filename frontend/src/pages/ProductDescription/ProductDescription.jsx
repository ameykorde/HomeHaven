import React, { useState } from "react";
import "./ProductDescription.css"; // Make sure to import the CSS file
import SectionList from "./SectionList";
import { useNavigate } from "react-router-dom";
const ProductDescriptionPage = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(prev + change, 1));
  };

  const calculatePrice = (duration) => {
    if (!duration) return "$0.00";
    const basePrice = 100; // Example base price
    const multiplier = duration / 3;
    return `$${(basePrice * multiplier).toFixed(2)}`;
  };

  const navigate = useNavigate();

  const handleRentNow = () => {
    navigate("/cart");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-6">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-lg-6">
          <div className="options-container">
            <h3 className="mx-2">Alexa Solid Wood Queen Size Double Bed</h3>
            <h6 className="mx-3 my-4">
              For how many months would you like to rent this?
            </h6>
            <div className="rental-options mx-3">
              {[3, 6, 9].map((duration) => (
                <div
                  key={duration}
                  className={`rental-option ${
                    selectedDuration === duration ? "selected" : ""
                  }`}
                  onClick={() => handleDurationSelect(duration)}
                >
                  {duration}
                </div>
              ))}
            </div>
            <div className="price mx-3">
              Rent Price: {calculatePrice(selectedDuration)}
            </div>
            <div className="d-grid gap-2 my-3">
              <button className="btn btn-custom" type="button" onClick={handleRentNow}>
                Rent Now
              </button>
            </div>
            <div className="icon-text-container">
              <span className="material-symbols-outlined mx-2 my-1">
                id_card
              </span>
              <span>KYC Documents to be submitted before Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info mt-4">
        <p
          className="mt-5"
          style={{
            color: "#70717a",
            fontSize: "1.25rem", // Adjust font size as needed
            fontWeight: "400", // Adjust font weight as needed
          }}
        >
          Product Description
        </p>
        <hr style={{ border: "0.5px solid #70717a", margin: "0.5rem 0" }} />
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        This Alexa Solid Wood Queen Size Double Bed is a stunning piece of furniture that combines style and durability. Crafted from premium Sheesham wood, this bed comes with a teak finish that enhances its aesthetic appeal. It offers a spacious sleeping area with dimensions of 78 inches by 60 inches, ensuring a comfortable sleep. The robust structure and the elegant design make it an ideal choice for any modern bedroom.
      </p>
       <SectionList/>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
