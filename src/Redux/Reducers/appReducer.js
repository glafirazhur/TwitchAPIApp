import { LOAD_TOP_DATA } from '../actionTypes';
import initialState from '../initialState';

const appReducer = (state = initialState.top, action) => {
  switch (action.type) {
    case LOAD_TOP_DATA:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default appReducer;
