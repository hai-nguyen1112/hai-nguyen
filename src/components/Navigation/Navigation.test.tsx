import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Navigation from './Navigation';

describe('<Navigation />', (): void => {
  let wrapper: ShallowWrapper;
  let onOpenSideDrawerMock: jest.Mock;
  beforeEach((): void => {
    onOpenSideDrawerMock = jest.fn();
    wrapper = shallow(<Navigation onOpenSideDrawer={onOpenSideDrawerMock} />);
  });

  it('should render one <div /> component', (): void => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render one <span /> component', (): void => {
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('should call the onOpenSideDrawer action', (): void => {
    let div: ShallowWrapper;
    div = wrapper.find('div');
    div.simulate('click');
    expect(onOpenSideDrawerMock.mock.calls.length).toBe(1);
  });

  test('<div /> should have className navigation', (): void => {
    expect(wrapper.find('div').hasClass('navigation')).toBe(true);
  });

  test('<span /> should have className icon', (): void => {
    expect(wrapper.find('span').hasClass('icon')).toBe(true);
  });
});
