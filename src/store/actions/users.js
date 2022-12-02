export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function userLoginRequest(data) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { data },
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
