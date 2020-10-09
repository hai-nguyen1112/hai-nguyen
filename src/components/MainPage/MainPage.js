import React from 'react';

import Welcome from '../Welcome';
import Projects from '../Projects';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Welcome />
      <Projects />
    </div>
  );
};

export default MainPage;
