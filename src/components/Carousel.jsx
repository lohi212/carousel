import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <button className="prev-button button-container">prev</button>
      <button className="next-button button-container">next</button>
      {images.map((image) => (
        <div className="slide">
          <img
            src={image}
            width={400}
            height={400}
            className="image-container"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
