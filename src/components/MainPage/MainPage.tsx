import React from 'react';

import Welcome from '../Welcome';
import Projects from '../Projects';
import About from '../About';
import Skills from '../Skills';

const MainPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Welcome />
      <Projects />
      <About />
      <Skills />
    </React.Fragment>
  );
};

export default MainPage;
