import React, { useState, useCallback } from 'react';

import Navigation from '../Navigation';
import SideDrawer from '../Navigation/SideDrawer';
import BackToTop from '../Navigation/BackToTop';
import Footer from '../UI/Footer';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const openSideDrawerHandler = useCallback((): void => {
    setShowSideDrawer(true);
  }, [setShowSideDrawer]);

  const closeSideDrawerHandler = useCallback((): void => {
    setShowSideDrawer(false);
  }, [setShowSideDrawer]);

  return (
    <div className={styles.container}>
      <BackToTop />
      <Navigation onOpenSideDrawer={openSideDrawerHandler} />
      <SideDrawer
        open={showSideDrawer}
        onCloseSideDrawer={closeSideDrawerHandler}
      />
      <main className={styles.mainContainer}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
