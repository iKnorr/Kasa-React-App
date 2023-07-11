import React from 'react';
import Banner from '../../components/Banner/Banner';
import styles from './Home.module.scss';
import data from '../../data/data.json';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <main>
      <Banner
        image="/images/banner.png"
        textLine1="Chez vous,"
        textLine2="partout et ailleurs"
      />
      <section className={styles.cardWrapper}>
        {data?.map(({ id, title, pictures }) => (
          <Card
            key={`${id}-${title}`}
            id={id}
            title={title}
            src={pictures[0]}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
