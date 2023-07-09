import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import React from 'react';
interface CardProps {
  title: string;
  src: string;
  id: string;
}

const Card = ({ title, src, id }: CardProps) => {
  return (
    <Link to={`/accommodation/${id}`} className={styles.link}>
      <div className={styles.wrapper}>
        <img src={src} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
