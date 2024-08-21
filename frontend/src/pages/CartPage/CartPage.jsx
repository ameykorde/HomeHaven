import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import { BASE_URL } from "../../../services/url"; // Update with your actual path

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const userId = userData?.userId;

      if (!userId) {
        alert("User is not logged in. Please log in first.");
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/carts/user/${userId}`);
        console.log(response.data);
        setCartItems(response.data?.products || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleBuy = () => {
    navigate("/address");
  };

  const handleDelete = async (productId) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.userId;

    try {
      const response = await axios.delete(
        `${BASE_URL}/carts/user/${userId}/products/${productId}`
      );
      console.log("Delete response:", response.data);
      if (response.status === 200) {
        setCartItems(cartItems.filter((item) => item.productId !== productId));
      } else {
        console.error("Failed to delete item:", response);
      }
    } catch (error) {
      console.error(
        "Error deleting product from cart:",
        error.response || error.message
      );
    }
  };

  // Group items by productId to avoid displaying the same product multiple times
  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mt-5">Cart</h4>
      <div className="row">
        {/* Left Side - Product Details */}
        <div className="pe-3 col">
          {groupedCartItems.map((item) => {
            const images = [
              item.productImage1,
              item.productImage2,
              item.productImage3,
              item.productImage4,
            ].filter((img) => img);

            return (
              <div
                key={item.productId}
                className="cart-item d-flex align-items-center mb-3"
              >
                <img
                  src={
                    images[0]
                      ? `data:image/jpeg;base64,${images[0]}`
                      : "placeholder.jpg"
                  }
                  alt={item.productName}
                  className="cart-item-img me-3"
                />
                <div className="cart-item-details flex-grow-1">
                  <h5>{item.productName}</h5>
                  <div>{item.duration}</div>
                </div>
                <span className="cart-item-price">${item.price}</span>
                <button
                  onClick={() => handleDelete(item.productId)}
                  className="btn ms-3"
                >
                  <span className="material-icons" style={{ color: "#079bab" }}>
                    delete
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Side - Cost Breakdown */}
        <div className="col mx-5">
          <h3 className="mb-3">Cost Breakdown</h3>
          <ul className="list-group mb-3">
            {groupedCartItems.map((item) => (
              <li
                key={item.productId}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <span>{item.productName}</span>
                  <br />
                  <small className="text-muted">{item.duration}</small>
                </div>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h5>Total: ${calculateTotal()}</h5>
          <button
            className="btn w-100 mt-3"
            style={{
              backgroundColor: "#079bab",
              color: "white",
              fontWeight: "500",
            }}
            onClick={handleBuy}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
