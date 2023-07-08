import { NavLink } from 'react-router-dom';
import { Logo } from '../Icons/Logo';
import styles from './Header.module.scss';

const Navbar = () => {
  return (
    <nav id={styles['navbar']} className={styles.header}>
      <Logo />
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
