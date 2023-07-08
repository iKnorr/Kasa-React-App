import styles from './Banner.module.scss';

interface BannerProps {
  image: string;
  text?: string;
}

const Banner = ({ image, text }: BannerProps) => {
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
      {typeof text === 'string' && <h1>{text}</h1>}
    </header>
  );
};

export default Banner;
