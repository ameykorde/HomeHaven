import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-container">
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/26571197/pexels-photo-26571197/free-photo-of-living-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Elegant Living Room Sets</h3>
            <p>Find the perfect furniture to complement your living room.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Modern Bedroom Designs</h3>
            <p>Explore our collection of modern and stylish bedroom sets.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Cozy Dining Spaces</h3>
            <p>Upgrade your dining experience with our cozy dining sets.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
