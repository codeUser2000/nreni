// import { GET_USERS_LIST_FAIL, GET_USERS_LIST_REQUEST, GET_USERS_LIST_SUCCESS } from '../actions/users';
import { toast } from 'react-toastify';
import {
  CREATE_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, CREATE_USER_SUCCESS,
} from '../actions/users';
import Account from '../../helpers/Account';

const initialState = {
  usersData: [],
  usersDataStatus: '',
};
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case GET_USERS_LIST_REQUEST: {
    //   return {
    //     ...state,
    //     usersDataStatus: 'request',
    //   };
    // }
    // case GET_USERS_LIST_SUCCESS: {
    //   return {
    //     ...state,
    //     usersDataStatus: 'ok',
    //     usersData: action.payload.data,
    //   };
    // }
    // case GET_USERS_LIST_FAIL: {
    //   return {
    //     ...state,
    //     usersDataStatus: 'fail',
    //     usersData: [],
    //   };
    // }
    case LOGIN_USER_SUCCESS: {
      Account.setToken(action.payload.data.token);
      return {
        ...state,
        usersDataStatus: 'ok',
      };
    }
    case CREATE_USER_SUCCESS: {
      Account.setToken(action.payload.data.token);
      return {
        ...state,
        usersDataStatus: 'ok',
      };
    }
    case LOGIN_USER_FAIL: {
      toast.error('Login is wrong');
      return {
        ...state,
        usersDataStatus: 'fail',
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
