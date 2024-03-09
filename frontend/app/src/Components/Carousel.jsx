import React, { useState, useEffect } from 'react';
import './Caraousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images=[], autoplayDelay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="arrow prev" onClick={prev}><FaChevronLeft /></button>
        <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
        <button className="arrow next" onClick={next}><FaChevronRight /></button>
      </div>
      <div className="carousel-text">
        <h1>Brain Boost</h1>
        <p>Making Kids smarter </p>
      </div>
    </div>
  );
};

export default Carousel;
