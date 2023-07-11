import React from 'react';
import { Star } from '../Icons/Logo/Stars/Star';
import { StarInactive } from '../Icons/Logo/Stars/StarInactive';

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
    <div style={{ display: 'flex', gap: '0.7rem' }}>
      {stars.map(star => (
        <div key={`${star}-${rating}`}>{star}</div>
      ))}
    </div>
  );
};

export default StarRating;
