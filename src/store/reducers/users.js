import { toast } from 'react-toastify';
import {
  GET_USERS_LIST_FAIL,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  FORGET_USER_PASSWORD_SUCCESS,
  FORGET_USER_PASSWORD_FAIL,
} from '../actions/users';

import Account from '../../helpers/Account';

const initialState = {
  usersData: [],
  usersDataStatus: '',
};
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST_REQUEST: {
      return {
        ...state,
        usersDataStatus: 'request',
      };
    }
    case GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        usersDataStatus: 'ok',
        usersData: action.payload.data.user,
      };
    }
    case GET_USERS_LIST_FAIL: {
      return {
        ...state,
        usersDataStatus: 'fail',
        usersData: [],
      };
    }
    case LOGIN_USER_SUCCESS: {
      const { data, remember } = action.payload;
      Account.setTokenAndProfile(data.token, remember, data.user);
      return {
        ...state,
        usersDataStatus: 'ok',
      };
    }
    case LOGIN_USER_FAIL: {
      toast.error('Login or password is wrong');
      return {
        ...state,
        usersDataStatus: 'fail',
      };
    }
    case FORGET_USER_PASSWORD_SUCCESS: {
      toast.success('Please check your mail');
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      return {
        ...state,
        usersDataStatus: 'ok',
      };
    }
    case FORGET_USER_PASSWORD_FAIL: {
      toast.error(action.payload.error.data.message);
      return {
        ...state,
        usersDataStatus: 'fail',
      };
    }
    case CREATE_USER_SUCCESS: {
      Account.setTokenAndProfile(action.payload.data.token);
      return {
        ...state,
        usersDataStatus: 'ok',
      };
    }
    case CREATE_USER_FAIL: {
      const { errors } = action.payload.error.data;
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const i in errors) {
        toast.error(errors[i]);
      }
      toast.error('You didnt get registered');
      return {
        ...state,
        usersDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
