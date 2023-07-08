import styles from './Card.module.scss';

type CardProps = {
  title: string;
  src: string;
};

const Card = ({ title, src }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className="imgWrapper">
        <img src={src} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
