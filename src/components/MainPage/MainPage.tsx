import React from 'react';

import Welcome from '../Welcome';
import Projects from '../Projects';
import About from '../About';
import Skills from '../Skills';

const MainPage = (): JSX.Element => {
  return (
    <div>
      <Welcome />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default MainPage;
