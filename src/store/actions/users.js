export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAIL = 'GET_USERS_LIST_FAIL';

export function getUsersListRequest() {
  return {
    type: GET_USERS_LIST_REQUEST,
    payload: {},
  };
}

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export function createUserRequest(data) {
  return {
    type: CREATE_USER_REQUEST,
    payload: { data },
  };
}
