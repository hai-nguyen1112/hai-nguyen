import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Layout from './Layout';
import Navigation from '../Navigation';
import SideDrawer from '../Navigation/SideDrawer';
import BackToTop from '../Navigation/BackToTop';
import Footer from '../UI/Footer';

describe('<Layout />', (): void => {
  let wrapper: ShallowWrapper;
  beforeEach((): void => {
    wrapper = shallow(
      <Layout>
        <div></div>
      </Layout>
    );
  });

  it('should have class name as container', () => {
    expect(wrapper.hasClass('container')).toEqual(true);
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

  it('should render <main><div></div></main>', (): void => {
    expect(wrapper.find('main')).toHaveLength(1);
    expect(wrapper.find('main').render().find('div')).toHaveLength(1);
  });

  test('the main element should have class name as mainContainer', () => {
    expect(wrapper.find('main').hasClass('mainContainer')).toEqual(true);
  });
});
