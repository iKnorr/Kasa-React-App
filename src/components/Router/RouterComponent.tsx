import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Header/Header';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../Footer/Footer';
import styles from './RouterComponent.module.scss';

const RouterComponent = () => {
  return (
    <Router>
      <div className={styles.content}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default RouterComponent;
