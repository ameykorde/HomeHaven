import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "Furniture",
    images: [],
    quantity: 1,
  });

  useEffect(() => {
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts([
          {
            "id": 1,
            "name": "Wooden Chair",
            "description": "A comfortable wooden chair.",
            "price": 89.99,
            "images": [
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            ],
            "quantity": 10
          },
          {
            "id": 2,
            "name": "Metal Desk",
            "description": "A sturdy metal desk.",
            "price": 149.99,
            "images": [
              "https://images.unsplash.com/photo-1534081332410-e5ff27b786f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjEyNjJ8MHwxfGFsbHwxfHx8fHx8fHx8fDE2Nzg0MTU0NjY&ixlib=rb-1.2.1&q=80&w=400"
            ],
            "quantity": 5
          }
        ]
        );
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct((prev) => ({ ...prev, images: files }));
  };

  const handleAddProduct = async () => {
    if (
      newProduct.name &&
      newProduct.description &&
      newProduct.price &&
      newProduct.images.length
    ) {
      try {
        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('description', newProduct.description);
        formData.append('price', newProduct.price);
        formData.append('category', newProduct.category);
        formData.append('quantity', newProduct.quantity);
        
        newProduct.images.forEach((image, index) => {
          formData.append('images', image);
        });

        const response = await axios.post('/api/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setProducts([...products, response.data]);
        setNewProduct({
          name: "",
          description: "",
          price: "",
          category: "Furniture",
          images: [],
          quantity: 1,
        });
      } catch (error) {
        console.error('Error adding product:', error);
      }
    } else {
      alert("Please fill in all fields and upload at least one image.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mt-5">Add New Product</h2>
      <div className="add-product-form mt-3">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            name="name"
            className="form-control"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="description"
            className="form-control"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            id="productPrice"
            type="number"
            name="price"
            className="form-control"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <select
            id="productCategory"
            name="category"
            className="form-control"
            value={newProduct.category}
            onChange={handleInputChange}
          >
            <option value="Furniture">Furniture</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="productQuantity" className="form-label">
            Quantity
          </label>
          <input
            id="productQuantity"
            type="number"
            name="quantity"
            className="form-control"
            placeholder="Quantity"
            value={newProduct.quantity}
            min="1"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImages" className="form-label">
            Product Images
          </label>
          <input
            id="productImages"
            type="file"
            name="images"
            className="form-control"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <h1 className="mt-5">Product List</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="product-image-container mb-3">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={product.name}
                        className="card-img-top"
                      />
                    ))}
                  </div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </p>
                  <p className="card-text">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
