import React from 'react';
import ProductCard from './ProductCard';

const ProductPage = () => {
  return (
    <>
        <div className="container">
            <h5 className='my-4'>Explore Our Extensive Furniture Rental Collection</h5>
            <div className="row">
                <div className="col-md-12">
                    
                    <ProductCard/>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductPage;
