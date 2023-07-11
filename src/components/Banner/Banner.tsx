import React from 'react';
import styles from './Banner.module.scss';

interface BannerProps {
  image: string;
  textLine1?: string;
  textLine2?: string;
}

const Banner = ({ image, textLine1, textLine2 }: BannerProps) => {
  return (
    <header
      id={styles['banner']}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
          ), url(${image})`,
        backgroundPositionY: 'center',
        backgroundSize: 'cover',
      }}
    >
      {typeof textLine1 === 'string' && typeof textLine2 === 'string' && (
        <div className={styles.textWrapper}>
          <h1>{textLine1}</h1>
          <h1>{textLine2}</h1>
        </div>
      )}
    </header>
  );
};

export default Banner;
