import {
  User,
  FetchUserSuccessAction,
  FetchUserStartAction,
  FetchUserFailAction,
} from '../actions/userActions';
import { ActionTypes } from '../actions';
import { updateObject } from '../../utils';

export interface UserState {
  user: User;
  isLoadingUser: boolean;
  errorMessage: string;
}

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

const fetchUserStart = (
  state: UserState,
  action: FetchUserStartAction
): UserState => {
  return updateObject(state, {
    isLoadingUser: action.isLoadingUser,
    errorMessage: action.errorMessage,
  });
};

const fetchUserSuccess = (
  state: UserState,
  action: FetchUserSuccessAction
): UserState => {
  return updateObject(state, {
    user: action.user,
    isLoadingUser: action.isLoadingUser,
    errorMessage: action.errorMessage,
  });
};

const fetchUserFail = (
  state: UserState,
  action: FetchUserFailAction
): UserState => {
  return updateObject(state, {
    isLoadingUser: action.isLoadingUser,
    errorMessage: action.errorMessage,
  });
};

export const userReducer = (
  state: UserState = initialState,
  action: FetchUserSuccessAction | FetchUserStartAction | FetchUserFailAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_START:
      return fetchUserStart(state, action);
    case ActionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case ActionTypes.FETCH_USER_FAIL:
      return fetchUserFail(state, action);
    default:
      return state;
  }
};
