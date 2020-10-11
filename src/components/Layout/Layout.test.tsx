import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';

import Layout from './Layout';
import Navigation from '../Navigation';
import SideDrawer from '../Navigation/SideDrawer';
import BackToTop from '../Navigation/BackToTop';
import Footer from '../UI/Footer';

describe('<Layout />', (): void => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Layout>
        <div></div>
      </Layout>
    );
  });
  it('should render one <BackToTop /> component', (): void => {
    expect(wrapper.find(BackToTop)).toHaveLength(1);
  });

  it('should render one <Navigation /> component', (): void => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

  it('should render one <SideDrawer /> component', (): void => {
    expect(wrapper.find(SideDrawer)).toHaveLength(1);
  });

  it('should render one <Footer /> component', (): void => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should render <main>{children}</main>', (): void => {
    expect(wrapper.html()).toContain('<main><div></div></main>');
  });
});
