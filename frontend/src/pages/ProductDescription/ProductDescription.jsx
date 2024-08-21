import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SectionList from "./SectionList";
import "./ProductDescription.css";
import { BASE_URL } from "../../../services/url";

const ProductDescriptionPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(3); // Default duration
  const [price, setPrice] = useState(0);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
        setProduct(response.data);
        setPrice(calculatePrice(selectedDuration)); // Set initial price
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, selectedDuration]);

  useEffect(() => {
    if (product) {
      setPrice(calculatePrice(selectedDuration));
    }
  }, [product, selectedDuration]);

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setPrice(calculatePrice(duration));
  };

  const calculatePrice = (duration) => {
    if (!duration || !product?.price) return 0;
    const basePrice = product.price;
    return basePrice * (duration / 3); // Example calculation
  };

  const handleRentNow = async () => {
    // Retrieve userId from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = userData?.userId;

    if (!userId) {
      alert('User is not logged in. Please log in first.');
      return;
    }

    try {
      // Send POST request to add product to cart
      const response = await axios.post(`${BASE_URL}/carts/user/${userId}/products`, {
        productId: Number(productId),
        rentalMonths: Number(selectedDuration)
      });

      if (response.status === 200) {
        navigate("/cart");
      } else {
        alert('Failed to add product to cart. Please try again.');
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert('Error adding product to cart. Please try again.');
    }
  };

  if (!product) return <p>Loading...</p>;

  // Handle image fields
  const images = [
    product.productImage1,
    product.productImage2,
    product.productImage3,
    product.productImage4
  ].filter(img => img); // Remove null or undefined images

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {images.length > 0 && images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {images.length > 0 && images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={`data:image/jpeg;base64,${image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="options-container">
            <h3 className="mx-2">{product.productName}</h3>
            <h6 className="mx-3 my-4">For how many months would you like to rent this?</h6>
            <div className="rental-options mx-3">
              {[3, 6, 9].map((duration) => (
                <div
                  key={duration}
                  className={`rental-option ${selectedDuration === duration ? "selected" : ""}`}
                  onClick={() => handleDurationSelect(duration)}
                >
                  {duration}
                </div>
              ))}
            </div>
            <div className="price mx-3">Rent Price: ${price.toFixed(2)}</div>
            <div className="d-grid gap-2 my-3">
              <button className="btn btn-custom" type="button" onClick={handleRentNow}>
                Rent Now
              </button>
            </div>
            <div className="icon-text-container">
              <span className="material-symbols-outlined mx-2 my-1">id_card</span>
              <span>KYC Documents to be submitted before Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info mt-4">
        <p className="mt-5" style={{ color: "#70717a", fontSize: "1.25rem", fontWeight: "400" }}>
          Product Description
        </p>
        <hr style={{ border: "0.5px solid #70717a", margin: "0.5rem 0" }} />
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{product.description}</p>
        <SectionList />
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
