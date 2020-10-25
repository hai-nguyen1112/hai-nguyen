import { combineReducers } from 'redux';

import { userReducer, UserState } from './userReducer';

export interface StoreState {
  user: UserState;
}

const rootReducer = combineReducers<StoreState>({
  user: userReducer,
});

export default rootReducer;
