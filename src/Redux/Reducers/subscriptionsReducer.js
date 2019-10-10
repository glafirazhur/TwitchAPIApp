import { GET_SUBSCRIPTIONS } from '../actionTypes';
import initialState from '../initialState';

const subscriptionsReducer = (state = initialState.subscriptions, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default subscriptionsReducer;
