import React, { useState, useCallback } from 'react';

import Navigation from '../Navigation';
import SideDrawer from '../Navigation/SideDrawer';
import BackToTop from '../Navigation/BackToTop';
import Footer from '../UI/Footer';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const openSideDrawerHandler = useCallback(() => {
    setShowSideDrawer(true);
  }, [setShowSideDrawer]);

  const closeSideDrawerHandler = useCallback(() => {
    setShowSideDrawer(false);
  }, [setShowSideDrawer]);

  return (
    <React.Fragment>
      <BackToTop />
      <Navigation onOpenSideDrawer={openSideDrawerHandler} />
      <SideDrawer
        open={showSideDrawer}
        onCloseSideDrawer={closeSideDrawerHandler}
      />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
