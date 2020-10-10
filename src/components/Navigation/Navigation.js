import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = (props) => {
  return (
    <div className={styles.navigation} onClick={props.onOpenSideDrawer}>
      <span className={styles.icon}></span>
    </div>
  );
};

export default Navigation;
