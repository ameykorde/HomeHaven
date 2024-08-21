import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsPage.css";
import { BASE_URL } from "../../../services/url";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    description: "",
    price: "",
    category: "FURNITURE",
    images: [],
    quantity: 1,
    type: "Product Type",
  });

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/category/FURNITURE`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
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
      newProduct.product_name &&
      newProduct.description &&
      newProduct.price &&
      newProduct.images.length &&
      newProduct.type &&
      newProduct.category &&
      newProduct.quantity
    ) {
      try {
        const formData = new FormData();
        formData.append("productName", newProduct.product_name);
        formData.append("description", newProduct.description);
        formData.append("price", newProduct.price);
        formData.append("category", newProduct.category);
        formData.append("quantity", newProduct.quantity);
        formData.append("type", newProduct.type);

        // Append images to formData
        newProduct.images.forEach((image, index) => {
          formData.append(`productImage${index + 1}`, image);
        });

        const response = await axios.post(`${BASE_URL}/api/products/add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setProducts([...products, response.data]);
        setNewProduct({
          product_name: "",
          description: "",
          price: "",
          category: "FURNITURE",
          images: [],
          quantity: 1,
          type: "Product Type",
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      alert("Please fill in all fields and upload at least one image.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mt-5">Add New Product</h2>
      <div className="add-product-form mt-3">
        {/* Form fields for product details */}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            name="product_name"
            className="form-control"
            placeholder="Product Name"
            value={newProduct.product_name}
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
            <option value="FURNITURE">FURNITURE</option>
            <option value="HOME_APPLIANCES">HOME_APPLIANCES</option>
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
          <label htmlFor="productType" className="form-label">
            Type
          </label>
          <input
            id="productType"
            type="text"
            name="type"
            className="form-control"
            placeholder="Type"
            value={newProduct.type}
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
      <div className="container mt-5">
        <h1>Product List</h1>
        <div className="row">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="product-image-container mb-3">
                      {[product.productImage1, product.productImage2, product.productImage3, product.productImage4].map(
                        (image, index) =>
                          image && (
                            <img
                              key={index}
                              src={`data:image/jpeg;base64,${image}`}
                              alt={product.product_name}
                              className="card-img-top"
                            />
                          )
                      )}
                    </div>
                    <h5 className="card-title">{product.productName}</h5>
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
    </div>
  );
};

export default ProductsPage;
