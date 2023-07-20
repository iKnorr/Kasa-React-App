import React from 'react';
import { Star } from '../Icons/Stars/Star';
import { StarInactive } from '../Icons/Stars/StarInactive';
import styles from './StarRating.module.scss';

interface RatingProps {
  rating?: string;
}

const StarRating = ({ rating }: RatingProps) => {
  const numRating = Number(rating);

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < numRating ? <Star /> : <StarInactive />
  );

  return (
    <div className={styles.ratingTagsContainer}>
      {stars?.map((star, index) => (
        <div key={`star-${index}`}>{star}</div>
      ))}
    </div>
  );
};

export default StarRating;
