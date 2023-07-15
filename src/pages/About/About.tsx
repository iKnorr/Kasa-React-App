import React from 'react';
import Banner from '../../components/Banner/Banner';
import styles from './About.module.scss';
import Dropdown from '../../components/Dropdown/Dropdown';
import { ABOUT_TEXTS } from '../../constants/text';

const About = () => {
  return (
    <>
      <Banner image="/images/banner-about.png" />
      <div className={styles.dropdownContainer}>
        {Object.entries(ABOUT_TEXTS).map(([key, value]) => (
          <Dropdown
            key={key}
            title={value.title}
            children={value.text}
            context="about-page"
          />
        ))}
      </div>
    </>
  );
};

export default About;
