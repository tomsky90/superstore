import { useState } from "react";
import Img1 from "../../assets/slider-imgs/img1.png";
import Img2 from "../../assets/slider-imgs/img2.png";

const Slider = () => {
  const images = [Img1, Img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="slider__slide">
            <img className="slider__img" src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="left-arrow">
        ◀
      </button>
      <button onClick={goToNext} className="right-arrow">
        ▶
      </button>
    </section>
  );
};

export default Slider;
