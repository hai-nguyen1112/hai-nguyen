// This is an integration test because it involves both the userActions and userReducer

import { storeFactory } from '../utils';
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFail,
} from '../redux/actions';
import { StoreState } from '../redux/reducers/rootReducer';
import { User } from '../redux/actions/userActions';

describe('fetchUser action dispatcher', () => {
  test('updates state successfully when fetchUser starts', () => {
    const initialState: StoreState = {
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

    const store = storeFactory(initialState);

    store.dispatch(fetchUserStart());

    const expectedState: StoreState = {
      ...initialState,
      user: {
        ...initialState.user,
        isLoadingUser: true,
      },
    };

    const newState = store.getState();
    expect(newState).toEqual(expectedState);
  });

  test('updates state successfully when fetchUser succeeds', () => {
    const initialState: StoreState = {
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

    const store = storeFactory(initialState);

    const fetchedData: User = {
      id: '123',
      photo: 'photo.jpg',
      role: 'user',
      intro: 'I am a user',
      education: [['A degree', 'B degree']],
      employmentHistory: [['Company C', 'Company D']],
      skills: [
        {
          img: 'imgage.jpg',
          title: 'Title 1',
          description: 'Description 1',
          id: '456',
        },
      ],
      name: 'username',
      email: 'username@xyz.com',
      projects: [
        {
          projectDetail: {
            details: ['detail 1'],
            subTitle: 'subtitle 1',
            gitRepoLinks: ['link 1'],
            demoLink: 'link 2',
            note: 'note 1',
          },
          img: 'image1.jpg',
          title: 'Title 1',
          description: 'Description 1',
          id: '123',
        },
      ],
    };

    store.dispatch(fetchUserSuccess(fetchedData));

    const expectedState = {
      ...initialState,
      user: {
        ...initialState.user,
        user: {
          id: '123',
          photo: 'photo.jpg',
          role: 'user',
          intro: 'I am a user',
          education: [['A degree', 'B degree']],
          employmentHistory: [['Company C', 'Company D']],
          skills: [
            {
              img: 'imgage.jpg',
              title: 'Title 1',
              description: 'Description 1',
              id: '456',
            },
          ],
          name: 'username',
          email: 'username@xyz.com',
          projects: [
            {
              projectDetail: {
                details: ['detail 1'],
                subTitle: 'subtitle 1',
                gitRepoLinks: ['link 1'],
                demoLink: 'link 2',
                note: 'note 1',
              },
              img: 'image1.jpg',
              title: 'Title 1',
              description: 'Description 1',
              id: '123',
            },
          ],
        },
        isLoadingUser: false,
        errorMessage: '',
      },
    };

    const newState: StoreState = store.getState();

    expect(newState).toEqual(expectedState);
  });

  test('updates state successfully when fetchUser fails', () => {
    const initialState: StoreState = {
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

    const store = storeFactory(initialState);

    store.dispatch(fetchUserFail('Something went wrong!'));

    const expectedState: StoreState = {
      ...initialState,
      user: {
        ...initialState.user,
        isLoadingUser: false,
        errorMessage: 'Something went wrong!',
      },
    };

    const newState = store.getState();

    expect(newState).toEqual(expectedState);
  });
});
