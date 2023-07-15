import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import { ArrowLeft } from '../Icons/Arrow/ArrowLeft';
import { ArrowRight } from '../Icons/Arrow/ArrowRight';

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`${currentIndex}-of-carousel`}
      />
      <div className={styles.left} onClick={handlePrevious}>
        <ArrowLeft />
      </div>
      <div className={styles.right} onClick={handleNext}>
        <ArrowRight />
      </div>
      <span className={styles.indexIndicator}>{`${currentIndex + 1}/${
        images.length
      }`}</span>
    </div>
  );
};

export default Carousel;
