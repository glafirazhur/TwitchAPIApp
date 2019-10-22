import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import subscriptionsReducer from './subscriptionsReducer';

export default combineReducers({
  top: appReducer,
  subscriptions: subscriptionsReducer,
  isAutorized: authReducer,
});
