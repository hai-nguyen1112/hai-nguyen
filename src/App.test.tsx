import React, { cloneElement } from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';

import App, { _App, AppProps } from './App';
import MainPage from './components/MainPage';
import Layout from './components/Layout';
import Spinner from './components/UI/Spinner';
import ErrorMessage from './components/UI/ErrorMessage';
import { storeFactory } from './utils/storeFactory';
import { StoreState } from './redux/reducers/rootReducer';
import { fetchUser } from './redux/actions';

const setupShallow = (state: StoreState) => {
  const store = storeFactory(state);
  const appProps = { store: store };
  const wrapper = shallow(<App {...appProps} />)
    .dive()
    .dive();
  return wrapper;
};

const setupMount = (state: StoreState, initialEntries: string[]) => {
  const store = storeFactory(state);
  const appProps = {
    user: {
      user: {
        id: '',
        photo: '',
        role: '',
        intro: '',
        education: [],
        employmentHistory: [],
        skills: [],
        name: '',
        email: '',
        projects: [],
      },
      isLoadingUser: false,
      errorMessage: '',
    },
    fetchUser: () => {},
  };
  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <_App {...appProps} />
      </MemoryRouter>
    </Provider>
  );

  return wrapper;
};

const mockRRD = require('react-router-dom');
mockRRD.BrowserRouter = (children: JSX.Element) => <div>{children}</div>;

describe('<App />', (): void => {
  describe('when app is loading', () => {
    it('should render one <Spinner />', () => {
      const state: StoreState = {
        user: {
          user: {
            id: '',
            photo: '',
            role: '',
            intro: '',
            education: [],
            employmentHistory: [],
            skills: [],
            name: '',
            email: '',
            projects: [],
          },
          isLoadingUser: true,
          errorMessage: '',
        },
      };
      const shallowWrapper: ShallowWrapper = setupShallow(state);
      expect(shallowWrapper.find(Spinner)).toHaveLength(1);
      expect(shallowWrapper.children()).toHaveLength(1);
    });
  });

  describe('when app is loaded and there is error', () => {
    it('should render one <ErrorMessage />', () => {
      const state: StoreState = {
        user: {
          user: {
            id: '',
            photo: '',
            role: '',
            intro: '',
            education: [],
            employmentHistory: [],
            skills: [],
            name: '',
            email: '',
            projects: [],
          },
          isLoadingUser: false,
          errorMessage: 'Something went wrong!',
        },
      };
      const shallowWrapper: ShallowWrapper = setupShallow(state);
      expect(shallowWrapper.find(ErrorMessage)).toHaveLength(1);
      expect(shallowWrapper.children()).toHaveLength(1);
    });
  });

  describe('when app is loaded and there is no error', () => {
    let shallowWrapper: ShallowWrapper;
    const state: StoreState = {
      user: {
        user: {
          id: '',
          photo: '',
          role: '',
          intro: '',
          education: [],
          employmentHistory: [],
          skills: [],
          name: '',
          email: '',
          projects: [],
        },
        isLoadingUser: false,
        errorMessage: '',
      },
    };
    beforeEach(() => {
      shallowWrapper = setupShallow(state);
    });
    it('should render one <Layout /> component', (): void => {
      expect(shallowWrapper.find(Layout)).toHaveLength(1);
    });

    it('should render one <Route /> component', (): void => {
      expect(shallowWrapper.find(Route)).toHaveLength(1);
    });

    it('should render one <Redirect /> component', (): void => {
      expect(shallowWrapper.find(Redirect)).toHaveLength(1);
    });

    it('should render one <Switch /> component', (): void => {
      expect(shallowWrapper.find(Switch)).toHaveLength(1);
    });

    it("should render one <MainPage /> component if getting valid path '/'", (): void => {
      const wrapper = setupMount(state, ['/']);
      expect(wrapper.find(MainPage)).toHaveLength(1);
    });

    it("should redirect to '/' if getting invalid path", (): void => {
      const wrapper = setupMount(state, ['/random']);
      expect(wrapper.find(MainPage)).toHaveLength(1);
    });
  });
});

describe('redux props', () => {
  const state: StoreState = {
    user: {
      user: {
        id: '',
        photo: '',
        role: '',
        intro: '',
        education: [],
        employmentHistory: [],
        skills: [],
        name: '',
        email: '',
        projects: [],
      },
      isLoadingUser: false,
      errorMessage: '',
    },
  };

  const store = storeFactory(state);

  const appProps = { store: store };

  let shallowWrapper: ShallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App {...appProps} />).dive();
  });

  test('<App /> has user piece of state as prop', () => {
    expect(shallowWrapper.props().user).toEqual(state.user);
  });

  test('<App /> has fetchUser action creator as prop', () => {
    expect(shallowWrapper.props().fetchUser).toBeInstanceOf(Function);
  });
});

test('fetchUser runs on App mount', () => {
  const fetchUserMock = jest.fn();

  const appProps: AppProps = {
    user: {
      user: {
        id: '',
        photo: '',
        role: '',
        intro: '',
        education: [],
        employmentHistory: [],
        skills: [],
        name: '',
        email: '',
        projects: [],
      },
      isLoadingUser: false,
      errorMessage: '',
    },
    fetchUser: fetchUserMock,
  };

  // run useEffect
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

  // render <App /> with fetchUserMock as the fetchUser prop
  shallow(<_App {...appProps} />);

  // check to see if mock ran
  const fetchUserCallCount = fetchUserMock.mock.calls.length;

  expect(fetchUserCallCount).toBe(1);
});
