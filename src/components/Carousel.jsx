import React from 'react';
import "./Carousel.css";

const Carousel = () => {
    const images = ["bali1.jpg", "kyoto1.jpg"];
    return (
      <div className="carousel">
        {images.map((img, i) => (
          <img key={i} src={`/images/${img}`} alt={`Slide ${i}`} />
        ))}
      </div>
    );
  };
  
  export default Carousel;
