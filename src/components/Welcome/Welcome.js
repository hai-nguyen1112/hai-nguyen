import React from 'react';

import { ButtonPrimary } from '../UI/Button';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div id="welcome" className={styles.welcome}>
      <div className={styles.textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingName}>Hai Nguyen</span>
          <span className={styles.headingTitle}>
            Full Stack Software Engineer
          </span>
        </h1>
      </div>
      <div className={styles.buttonGroupBox}>
        <div className={styles.buttonBox}>
          <ButtonPrimary
            path="#projects"
            color="white"
            shape="skewed"
            width="fluid"
          >
            My Projects
          </ButtonPrimary>
        </div>
        <div className={styles.buttonBox}>
          <ButtonPrimary
            path="#about"
            color="white"
            shape="skewed"
            width="fluid"
          >
            About Me
          </ButtonPrimary>
        </div>
        <div className={styles.buttonBox}>
          <ButtonPrimary
            path="#skills"
            color="white"
            shape="skewed"
            width="fluid"
          >
            My Skills
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
