import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [curr, setCurr] = useState(0);
  const slides = document.querySelectorAll(".slide");

  const handleNextClick = () => {
    console.log("===");
    let newCurr = 0;
    if (curr === slides.length - 1) newCurr = 0;
    else newCurr = curr + 1;

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${400 * (indx - newCurr)}px)`;
    });
    setCurr(newCurr);
  };

  const handlePrevClick = () => {
    let newCurr = 0;
    if (curr === 0) newCurr = slides.length - 1;
    else newCurr = curr - 1;

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${400 * (indx - newCurr)}px)`;
    });
    setCurr(newCurr);
  };

  return (
    <div className="carousel-container">
      <button
        className="prev-button button-container"
        onClick={handlePrevClick}
      >
        prev
      </button>
      <button
        className="next-button button-container"
        onClick={handleNextClick}
      >
        next
      </button>
      {images.map((image, idx) => (
        <div
          className="slide"
          key={image}
          style={{
            transform: `translateX(${idx * 400}px)`,
          }}
        >
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
