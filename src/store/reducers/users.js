import { toast } from 'react-toastify';
import {
  GET_USERS_LIST_FAIL,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FORGET_USER_PASSWORD_SUCCESS,
  FORGET_USER_PASSWORD_FAIL,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, DELETE_USER_SUCCESS,
} from '../actions/users';

import Account from '../../helpers/Account';

const initialState = {
  usersData: [],
  usersDataStatus: '',
  adminData: [],
  adminDataStatus: '',
  pagination: 0,
  singleUserData: {},
  singleUserDataStatus: '',
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
        pagination: +action.payload.data.totalPages,
      };
    }
    case GET_USERS_LIST_FAIL: {
      return {
        ...state,
        usersDataStatus: 'fail',
        usersData: [],
      };
    }

    case GET_USER_PROFILE_REQUEST: {
      return {
        ...state,
        singleUserDataStatus: 'request',
      };
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        singleUserDataStatus: 'ok',
        singleUserData: action.payload.data.user,
      };
    }
    case GET_USER_PROFILE_FAIL: {
      return {
        ...state,
        singleUserDataStatus: 'fail',
        singleUserData: {},
      };
    }

    case LOGIN_USER_SUCCESS: {
      const {
        data,
        remember,
      } = action.payload;
      Account.setToken(data.token, remember);
      return {
        ...state,
        singleUserDataStatus: 'ok',
      };
    }
    case LOGIN_USER_FAIL: {
      toast.error(action.payload.error.data.message);
      return {
        ...state,
        singleUserDataStatus: 'fail',
      };
    }

    case LOGIN_ADMIN_SUCCESS: {
      const {
        data,
        remember,
      } = action.payload;
      Account.setAdminToken(data.token, remember, data.user);
      return {
        ...state,
        adminDataStatus: 'ok',
      };
    }
    case LOGIN_ADMIN_FAIL: {
      toast.error('Login or password is wrong');
      return {
        ...state,
        adminDataStatus: 'fail',
      };
    }

    case FORGET_USER_PASSWORD_SUCCESS: {
      toast.success('Please check your mail');
      return {
        ...state,
        singleUserDataStatus: 'ok',
      };
    }
    case FORGET_USER_PASSWORD_FAIL: {
      toast.error(action.payload.error.data.message);
      return {
        ...state,
        singleUserDataStatus: 'fail',
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
        singleUserDataStatus: 'fail',
      };
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        singleUserDataStatus: '',
      };
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        singleUserData: action.payload.data.updateUser,
      };
    }
    case UPDATE_USER_FAIL: {
      const { errors } = action.payload.error;
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const i in errors) {
        toast.error(errors[i]);
      }
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
