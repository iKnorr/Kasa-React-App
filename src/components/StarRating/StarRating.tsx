import React from 'react';
import { Star } from '../Icons/Stars/Star';
import { StarInactive } from '../Icons/Stars/StarInactive';

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
      {stars.map((star, index) => (
        <div key={`${index}-${star}`}>{star}</div>
      ))}
    </div>
  );
};

export default StarRating;
