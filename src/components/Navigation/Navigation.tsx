import React from 'react';

import styles from './Navigation.module.scss';

interface NavigationProps {
  onOpenSideDrawer(): void;
}

const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <div className={styles.navigation} onClick={props.onOpenSideDrawer}>
      <span className={styles.icon}></span>
    </div>
  );
};

export default Navigation;
