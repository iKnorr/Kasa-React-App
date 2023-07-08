import React from 'react';
import Banner from '../../components/Banner/Banner';
import styles from './Home.module.scss';
import data from '../../data/data.json';
import Card from '../../components/Card/Card';

const Home = () => {
  console.log(data);
  return (
    <main>
      <Banner
        image="/images/banner.png"
        text="Chez vous, partout et ailleurs"
      />
      <section className={styles.cardWrapper}>
        {data?.map(({ title, pictures }) => (
          <Card title={title} src={pictures[0]} />
        ))}
      </section>
    </main>
  );
};

export default Home;
