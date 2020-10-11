import React from 'react';

import styles from './BackToTop.module.scss';

const BackToTop = (): JSX.Element => {
  return (
    <a href="!#">
      <div className={styles.backToTop}>
        <div className={styles.inside}></div>
      </div>
    </a>
  );
};

export default BackToTop;
