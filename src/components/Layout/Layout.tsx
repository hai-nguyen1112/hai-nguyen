import React, { useState, useCallback } from 'react';

import Navigation from '../Navigation';
import SideDrawer from '../Navigation/SideDrawer';
import BackToTop from '../Navigation/BackToTop';
import Footer from '../UI/Footer';

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
    <div>
      <BackToTop />
      <Navigation onOpenSideDrawer={openSideDrawerHandler} />
      <SideDrawer
        open={showSideDrawer}
        onCloseSideDrawer={closeSideDrawerHandler}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
