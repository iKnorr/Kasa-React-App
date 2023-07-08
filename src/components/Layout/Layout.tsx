import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import Navbar from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
