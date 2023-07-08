import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  src: string;
}

const Card = ({ title, src }: CardProps) => {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.wrapper}>
        <img src={src} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
