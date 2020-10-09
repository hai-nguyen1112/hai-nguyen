import React from 'react';

import Welcome from '../Welcome';
import Projects from '../Projects';
import About from '../About';
import Skills from '../Skills';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Welcome />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default MainPage;
