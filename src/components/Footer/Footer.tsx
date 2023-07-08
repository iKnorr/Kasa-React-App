import React from 'react';
import { Logo } from '../Icons/Logo';
import { COLORS } from '../../constants/colors';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer id={styles['footer-container']}>
      <Logo width="12.2rem" height="3.9rem" color={COLORS.secondary} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
