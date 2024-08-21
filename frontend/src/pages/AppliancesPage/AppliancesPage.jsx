import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../../components/Product/CategoryCard";
import ProductCard from "../../components/Product/ProductCard";
import { BASE_URL } from "../../../services/url";

const AppliancesPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: "category" },
    { name: "Fridge", icon: "kitchen" },
    { name: "Washing Machine", icon: "local_laundry_service" },
    { name: "Cooler", icon: "ac_unit" },
    { name: "AC", icon: "air" },
    { name: "Water Purifier", icon: "filter_drama" },
  ];

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/category/HOME_APPLIANCES`);
        setProducts(response.data);
        setFilteredProducts(response.data); // Set filtered products to all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.type.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <h5 className="mx-4 mt-4">
        Discover Our Wide Range of Home Appliances
      </h5>
      <div className="row mt-4 flex-nowrap overflow-auto category-card">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            icon={category.icon}
            onClick={() => handleCategoryClick(category.name)} // Pass the onClick handler
          />
        ))}
      </div>
      <div className="">
        <div className="row mt-3">
          {filteredProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                <ProductCard
                  image={product.productImage1 ? `data:image/jpeg;base64,${product.productImage1}` : "default-image-url"} // Handle case where image is null
                  title={product.productName}
                  description={product.description}
                  price={`$${product.price.toFixed(2)}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliancesPage;
