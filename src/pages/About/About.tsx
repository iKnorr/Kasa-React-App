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
            width="100%"
            fontSize="2.4rem"
            lineHeight="3.4rem"
          />
        ))}
      </div>
    </>
  );
};

export default About;
