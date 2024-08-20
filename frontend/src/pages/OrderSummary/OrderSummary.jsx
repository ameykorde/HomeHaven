import React from 'react';
import './OrderSummary.css';

import { useNavigate } from "react-router-dom";
const OrderSummary = () => {

    const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/");
  };

  const orderDetails = {
    product: {
      name: "Alexa Solid Wood Queen Size Double Bed",
      image: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg", // Replace with the actual image path
      price: 500,
      quantity: 1,
      months: 6, 
    },
    address: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      contactNumber: "9876543210",
      addressLine: "123, ABC Apartments, XYZ Street",
      landmark: "Near Central Park",
      postalCode: "411001",
      city: "Pune",
    },
    totalPrice: 3000, // Total price calculation can be dynamic
  };

  return (
    <div className="container mt-4">
      <h2>Order Summary</h2>
      <div className="d-flex justify-content-between">
        {/* Left Side - Product Details */}
        <div className="w-50">  
          <h4>Product Details</h4>
          <div className="d-flex align-items-center mb-3">
            <img src={orderDetails.product.image} alt={orderDetails.product.name} className="summary-item-img me-3" />
            <div className="summary-item-details">
              <h5>{orderDetails.product.name}</h5>
              <p>Quantity: {orderDetails.product.quantity}</p>
              <p>Rental Duration: {orderDetails.product.months} months</p>
              <p>Price per Month: ₹{orderDetails.product.price}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Address and Price Details */}
        <div className="w-50">
          <h4>Shipping Address</h4>
          <p><strong>Name:</strong> {orderDetails.address.fullName}</p>
          <p><strong>Email:</strong> {orderDetails.address.email}</p>
          <p><strong>Contact:</strong> {orderDetails.address.contactNumber}</p>
          <p><strong>Address:</strong> {orderDetails.address.addressLine}</p>
          <p><strong>Landmark:</strong> {orderDetails.address.landmark}</p>
          <p><strong>Postal Code:</strong> {orderDetails.address.postalCode}</p>
          <p><strong>City:</strong> {orderDetails.address.city}</p>

          <h6>Total Price</h6>
          <h5>₹{orderDetails.totalPrice} (Excl GST)</h5>
          <div className="d-grid gap-2">
  <button className="btn btn-primary btn-lg" type="button" onClick={handlePayment}>Proceed To Payment</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
