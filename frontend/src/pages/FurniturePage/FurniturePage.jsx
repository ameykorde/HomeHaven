import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../../components/Product/CategoryCard";
import ProductCard from "../../components/Product/ProductCard";
import { BASE_URL } from "../../../services/url";

const FurniturePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: "category" },
    { name: "Bed", icon: "bed" },
    { name: "Table", icon: "table_restaurant" },
    { name: "Chair", icon: "event_seat" },
    { name: "Wardrobes", icon: "shelves" },
    { name: "Sofa", icon: "chair" },
  ];

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/category/FURNITURE`);
        console.log("Fetched products:", response.data); // Debugging: Check fetched data
        setProducts(response.data);
        setFilteredProducts(response.data); // Set filtered products to all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category); // Debugging: Check selected category

    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.type.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtered products:", filtered); // Debugging: Check filtered products
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <h5 className="mx-4 mt-4">
        Explore Our Extensive Furniture Rental Collection
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
                  id={product.id} // Ensure `id` is passed to ProductCard for navigation
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;
