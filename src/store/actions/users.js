export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function userLoginRequest(data, remember) {
  console.log(remember);
  return {
    type: LOGIN_USER_REQUEST,
    payload: { formData: data, remember },
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

export const FORGET_USER_PASSWORD_REQUEST = 'FORGET_USER_PASSWORD_REQUEST';
export const FORGET_USER_PASSWORD_SUCCESS = 'FORGET_USER_PASSWORD_SUCCESS';
export const FORGET_USER_PASSWORD_FAIL = 'FORGET_USER_PASSWORD_FAIL';

export function forgetUserPasswordRequest(email) {
  return {
    type: FORGET_USER_PASSWORD_REQUEST,
    payload: { email },
  };
}
export const NEW_USER_PASSWORD_REQUEST = 'NEW_USER_PASSWORD_REQUEST';
export const NEW_USER_PASSWORD_SUCCESS = 'NEW_USER_PASSWORD_SUCCESS';
export const NEW_USER_PASSWORD_FAIL = 'NEW_USER_PASSWORD_FAIL';

export function newUserPasswordRequest(data) {
  return {
    type: NEW_USER_PASSWORD_REQUEST,
    payload: { data },
  };
}
