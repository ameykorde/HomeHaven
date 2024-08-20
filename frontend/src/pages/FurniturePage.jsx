import CategoryCard from "../components/Product/CategoryCard";
import ProductCard from "../components/Product/ProductCard";
import './FurniturePage.css'
const FurniturePage = () => {
  const categories = [
    { name: "All", icon: "category" },
    { name: "Bed", icon: "bed" },
    { name: "Table", icon: "table_restaurant" },
    { name: "Chair", icon: "event_seat" },
    { name: "Wardrobes", icon: "shelves" },
    { name: "sofa", icon: "chair" },
  ];

  return (
    <div className="container ">
      <h5 className="mx-4 mt-4">
        Explore Our Extensive Furniture Rental Collection
      </h5>
      <div className="row flex-nowrap overflow-auto category-card">
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} icon={category.icon} />
        ))}
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <ProductCard
              image="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/5900/hero/1702711018.jpg"
              title="Bada Sofa"
              description="Experience ultimate comfort and style with these iconic Nike Air Max sneakers."
              price="$149.99"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <ProductCard
              image="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products_v3/3509/gallery_1.jpg"
              title="Usse Bada Sofa"
              description="Boost your run with these top-of-the-line Adidas UltraBoost sneakers."
              price="$129.99"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              title="Puma RS-X"
              description="Step up your game with the stylish and comfortable Puma RS-X sneakers."
              price="$99.99"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;
