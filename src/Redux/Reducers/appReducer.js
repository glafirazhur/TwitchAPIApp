import { LOAD_APP_DATA } from '../actionTypes';
import initialState from '../initialState';

const appReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case LOAD_APP_DATA:
      return state;
    default:
      return state;
  }
};

export default appReducer;
