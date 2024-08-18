import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';

const HeroCarousel = () => {
  return (
    <Carousel className="hero-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://p.rmjo.in/productSquare/2mj3khj8-500x500.jpg"
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
          src="https://p.rmjo.in/productSquare/ni20krjz-500x500.jpg"
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
          src="https://p.rmjo.in/productSquare/16ctgjip-500x500.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cozy Dining Spaces</h3>
          <p>Upgrade your dining experience with our cozy dining sets.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
