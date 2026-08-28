import { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

export default function Carousel({ images, alt, autoPlayInterval = 3500 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % images.length);
  }, [images.length]);

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, next, autoPlayInterval, images.length]);

  if (images.length === 0) return <div className={styles.placeholder} />;

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} className={styles.slide} draggable={false} />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            ›
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
