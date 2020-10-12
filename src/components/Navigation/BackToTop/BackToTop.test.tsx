import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import BackToTop from './BackToTop';

describe('<BackToTop />', (): void => {
  let wrapper: ShallowWrapper;
  beforeEach((): void => {
    wrapper = shallow(<BackToTop />);
  });

  it('should render an anchor link', (): void => {
    expect(wrapper.find('a')).toHaveLength(1);
  });

  test('the page should be scrolled to the top upon anchor link click', (): void => {
    const anchorHref: string | undefined = wrapper.find('a').prop('href');
    expect(anchorHref).toEqual('!#');
  });

  it('should render two <div/> components', (): void => {
    expect(wrapper.find('div')).toHaveLength(2);
  });

  test('the first <div/> should have className backToTop', (): void => {
    expect(wrapper.find('div').at(0).hasClass('backToTop')).toBe(true);
  });

  test('the second <div/> should have className inside', (): void => {
    expect(wrapper.find('div').at(1).hasClass('inside')).toBe(true);
  });
});
