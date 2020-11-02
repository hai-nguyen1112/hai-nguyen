import { userReducer } from '.';
import { ActionTypes } from '../actions';
import { UserState } from './userReducer';

describe('userReducer', () => {
  const initialState: UserState = {
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
  };

  it('returns default initial state when no action is passed', () => {
    const newState = userReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('returns isLoadingUser as `true` and an empty error message upon receiving an action type of `FETCH_USER_START`', () => {
    const newState = userReducer(initialState, {
      type: ActionTypes.FETCH_USER_START,
      isLoadingUser: true,
      errorMessage: '',
    });

    expect(newState).toEqual({
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
    });
  });

  it('returns user data, isLoadingUser as `false` and an empty error message upon receiving an action type of `FETCH_USER_SUCCESS`', () => {
    const newState = userReducer(initialState, {
      type: ActionTypes.FETCH_USER_SUCCESS,
      user: {
        id: '123',
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
    });

    expect(newState).toEqual({
      user: {
        id: '123',
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
    });
  });

  it('returns isLoadingUser as `false` and an error message upon receiving an action type of `FETCH_USER_FAIL`', () => {
    const newState = userReducer(initialState, {
      type: ActionTypes.FETCH_USER_FAIL,
      isLoadingUser: false,
      errorMessage: 'Error! Please try again',
    });

    expect(newState).toEqual({
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
      errorMessage: 'Error! Please try again',
    });
  });
});
