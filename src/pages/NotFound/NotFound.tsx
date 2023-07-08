import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div id={styles['container']}>
      <h1 className={styles.heading}>404</h1>{' '}
      <span className={styles.subHeading}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link
        to="/"
        className={styles.link}
      >{`Retourner sur la page d’accueil`}</Link>
    </div>
  );
};

export default NotFound;
