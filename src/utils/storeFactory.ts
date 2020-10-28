import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux/reducers/rootReducer';
import { StoreState } from '../redux/reducers/rootReducer';

export const storeFactory = (state: StoreState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
