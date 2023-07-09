import React from 'react';
import { Star } from '../Icons/Star';
import { StarInactive } from '../Icons/StarInactive';

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
    <div style={{ display: 'flex' }}>
      {stars.map(star => (
        <div style={{ margin: '0 0.7rem' }}>{star}</div>
      ))}
    </div>
  );
};

export default StarRating;
