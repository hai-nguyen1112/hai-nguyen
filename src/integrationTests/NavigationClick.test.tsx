import React from 'react';
import { mount } from 'enzyme';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import SideDrawer from '../components/Navigation/SideDrawer';
import Backdrop from '../components/UI/Backdrop';

test('<SideDrawer /> and <Backdrop /> should open upon Navigation click', (): void => {
  const wrapper = mount(
    <Layout>
      <div></div>
    </Layout>
  );

  const navigationComponent = wrapper.find(Navigation);
  navigationComponent.simulate('click');

  const sideDrawerComponent = wrapper.find(SideDrawer);
  const backdropComponent = wrapper.find(Backdrop);

  expect(sideDrawerComponent.find('div').at(1).hasClass('open')).toBe(true);

  expect(backdropComponent.find('div').prop('style')).toHaveProperty(
    'opacity',
    '1'
  );

  expect(backdropComponent.find('div').prop('style')).toHaveProperty(
    'visibility',
    'visible'
  );
});
