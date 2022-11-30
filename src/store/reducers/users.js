import { GET_USERS_LIST_FAIL, GET_USERS_LIST_REQUEST, GET_USERS_LIST_SUCCESS } from '../actions/users';

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
        usersData: action.payload.data,
      };
    }
    case GET_USERS_LIST_FAIL: {
      return {
        ...state,
        usersDataStatus: 'fail',
        usersData: [],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
