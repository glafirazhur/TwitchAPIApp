import { combineReducers } from 'redux';
import appReducer from './appReducer';
import subscriptionsReducer from './subscriptionsReducer';

export default combineReducers({
  top: appReducer,
  subscriptions: subscriptionsReducer,
});
