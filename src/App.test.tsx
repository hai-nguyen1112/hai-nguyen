import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from './App';
import MainPage from './components/MainPage';
import Layout from './components/Layout';

const mockRRD = require('react-router-dom');
mockRRD.BrowserRouter = (children: JSX.Element) => <div>{children}</div>;

describe('<App />', () => {
  it('should render one <Layout /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it("should render one <MainPage /> component if getting valid path '/'", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(1);
  });

  it("should redirect to '/' if getting invalid path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(MainPage)).toHaveLength(1);
  });
});
