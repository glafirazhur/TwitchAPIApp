import axios from 'axios';
import {LOAD_TOP_DATA, GET_SUBSCRIPTIONS, LOGIN_USER} from '../actionTypes';

const axiosHeaders = {
  'Client-Id': process.env.REACT_APP_TWITCH_API_CLIENT_ID,
};

const loadTopGamesAction = (data) => ({ type: LOAD_TOP_DATA, payload: data });
const getSubscriptionAction = (data) => ({ type: GET_SUBSCRIPTIONS, payload: data });

export const loadTopGamesData = () => (dispatch) => {
  const axiosConfig = {
    headers: axiosHeaders,
  };

  axios.get('https://api.twitch.tv/helix/games/top?first=10', axiosConfig)
    .then(({ data }) => {
      dispatch(loadTopGamesAction(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSubscriptions = () => (dispatch) => {

  axios.post('', data)
    .then((result) => result)
    .then(({ data }) => {
      dispatch(getSubscriptionAction(data));
    })
    .catch();
};

// check cookies and return the right Auth bool
export const userAuthAction = (isAuth) => ({ type: LOGIN_USER, payload: isAuth });
