import React, { useState } from "react";
import "./ProductsPage.css"; // Import custom styles

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wooden Chair",
      description: "A comfortable wooden chair.",
      price: 89.99,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      ],
      category: "Furniture",
      quantity: 1
    },
    // Add more products as needed
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleImageAdd = (id) => {
    // Implement logic to add images
  };

  const handleCategoryChange = (id, category) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, category } : product
    ));
  };

  const handleQuantityChange = (id, quantity) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity } : product
    ));
  };

  return (
    <div className="products-page">
      <h1>Furniture List</h1>
      <div className="products-container ">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="add-product-card">
              <div className="product-image-container">
                {product.images.map((image, index) => (
                <img key={index} src={image} alt={product.name} className="product-image" />
                ))}
                <button className="btn btn-primary" onClick={() => handleImageAdd(product.id)}>Add Image</button>
              </div>
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-edit">
                  <label>Category:</label>
                  <select
                    value={product.category}
                    onChange={(e) => handleCategoryChange(product.id, e.target.value)}
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Home Appliances">Home Appliances</option>
                  </select>
                </div>
                <div className="product-edit">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={product.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  />
                </div>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
