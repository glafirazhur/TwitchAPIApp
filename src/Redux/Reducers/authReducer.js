import { LOGIN_USER } from '../actionTypes';
import initialState from '../initialState';

const authReducer = (state = initialState.isAutorized, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
