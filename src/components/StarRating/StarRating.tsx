import React from 'react';
import { Star } from '../Icons/Stars/Star';
import { StarInactive } from '../Icons/Stars/StarInactive';
import styles from './StarRating.module.scss';

interface RatingProps {
  rating?: string;
}

const StarRating = ({ rating }: RatingProps) => {
  const numRating = Number(rating);

  const stars: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < numRating) {
      stars.push(<Star />);
    } else {
      stars.push(<StarInactive />);
    }
  }

  return (
    <div className={styles.ratingTagsContainer}>
      {stars.map((star, index) => (
        <div key={`${index}-${star}`}>{star}</div>
      ))}
    </div>
  );
};

export default StarRating;
