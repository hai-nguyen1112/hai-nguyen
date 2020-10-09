import React from 'react';
import Footer from '../UI/Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
