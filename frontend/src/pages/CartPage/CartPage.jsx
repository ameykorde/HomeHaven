import React, { useState } from 'react';
import './CartPage.css';

import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Alexa Solid Wood Queen Size Double Bed",
      image: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg", // Replace with the actual image path
      price: 500,
      quantity: 1,
      duration: "6 Months",
    },
    {
      id: 2,
      name: "Alexa Solid Wood Queen Size Double Bed",
      image: "https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg", // Replace with the actual image path
      price: 500,
      quantity: 1,
      duration: "12 Months",
    },
    // Add more products as needed
  ]);

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, increment) => {
    setCartItems(cartItems.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + increment } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/address");
  };

  return (
    <div className="container mt-4 ">
      <h2>Cart</h2>

      <div className="row">
        {/* Left Side - Product Details */}
        <div className="pe-3 col">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex align-items-center mb-3">
              <img src={item.image} alt={item.name} className="cart-item-img me-3" />
              <div className="cart-item-details flex-grow-1">
                <h5>{item.name}</h5>
                <div className="d-flex align-items-center mb-2">
                  <span>Quantity: </span>
                  <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <div>{item.duration}</div>
              </div>
              <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}
        </div>

        {/* Right Side - Cost Breakdown and Buy Option */}
        <div className="col">
          <div className=" p-3">
            <h4 className="mb-3">Cost Breakdown</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span>{item.name}</span><br/>
                    <small className="text-muted">{item.duration}</small>
                  </div>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h5>Total: ${calculateTotal()}</h5>
            <button className="btn btn-primary w-100 mt-3" onClick={handleBuy}>Proceed to Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
