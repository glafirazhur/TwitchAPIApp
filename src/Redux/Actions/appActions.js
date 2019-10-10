import axios from 'axios';
import { LOAD_APP_DATA, GET_SUBSCRIPTIONS } from '../actionTypes';

const axiosAuthParams = {
  client_id: process.env.REACT_APP_TWITCH_API_CLIENT_ID,
  redirect_uri: 'http://localhost:3000/',
};

const axiosHeaders = {
  'Client-Id': process.env.REACT_APP_TWITCH_API_CLIENT_ID,
};

const loadAppDataAction = (data) => ({ type: LOAD_APP_DATA, payload: data });
const getSubscriptionAction = () => ({ type: GET_SUBSCRIPTIONS });

export const loadAppData = () => (dispatch) => {
  const axiosConfig = {
    headers: axiosHeaders,
  };

  axios.get('https://api.twitch.tv/helix/games/top', axiosConfig)
    .then(({ data }) => {
      dispatch(loadAppDataAction(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSubscriptions = () => (dispatch) => {

  const axiosTokenConfig = {
    /*headers: axiosHeaders,*/
    params: {
      client_id: process.env.REACT_APP_TWITCH_API_CLIENT_ID,
      /*client_secret: process.env.REACT_APP_TWITCH_SECRET_CODE,*/
      redirect_uri: 'http://localhost:3000',
      response_type: 'token',
      scope: 'channel:read:subscriptions',
    },
  };

  axios.post('http://localhost:5000/api/auth', axiosTokenConfig)
    .then((res) => {
      console.log(res);
      /*const axiosConfig = {
        headers: axiosHeaders,
        params: {
          ...axiosAuthParams,
          broadcaster_id: process.env.REACT_APP_TWITCH_API_CLIENT_ID,
          scope: 'channel:read:subscriptions',
        },
      };*/
      // return axios.get('https://api.twitch.tv/helix/subscriptions', axiosConfig);
    })
    .then(({ data }) => {
      dispatch(getSubscriptionAction(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
