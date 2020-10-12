import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router';

import App from './App';
import MainPage from './components/MainPage';
import Layout from './components/Layout';

const mockRRD = require('react-router-dom');
mockRRD.BrowserRouter = (children: JSX.Element) => <div>{children}</div>;

describe('<App />', (): void => {
  it('should render one <Layout /> component', (): void => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('should render one <Route /> component', (): void => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(1);
  });

  it('should render one <Redirect /> component', (): void => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

  it('should render one <Switch /> component', (): void => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it("should render one <MainPage /> component if getting valid path '/'", (): void => {
    const wrapper: ReactWrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(1);
  });

  it("should redirect to '/' if getting invalid path", (): void => {
    const wrapper: ReactWrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(1);
  });
});
