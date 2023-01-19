export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function userLoginRequest(data, remember) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      formData: data,
      remember,
    },
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

export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAIL = 'GET_USERS_LIST_FAIL';

export function getUserData(page) {
  return {
    type: GET_USERS_LIST_REQUEST,
    payload: { page },
  };
}

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export function deleteUserRequest(email) {
  return {
    type: DELETE_USER_REQUEST,
    payload: { email },
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

export const LOGIN_ADMIN_REQUEST = 'LOGIN_ADMIN_REQUEST';
export const LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS';
export const LOGIN_ADMIN_FAIL = 'LOGIN_ADMIN_FAIL';

export function adminLoginRequest(data, remember) {
  return {
    type: LOGIN_ADMIN_REQUEST,
    payload: {
      formData: data,
      remember,
    },
  };
}

export const DELETE_USER_SELF_REQUEST = 'DELETE_USER_SELF_REQUEST';
export const DELETE_USER_SELF_SUCCESS = 'DELETE_USER_SELF_SUCCESS';
export const DELETE_USER_SELF_FAIL = 'DELETE_USER_SELF_FAIL';

export function deleteUserSelfRequest() {
  return {
    type: DELETE_USER_SELF_REQUEST,
    payload: {},
  };
}

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL';

export function getUserProfileRequest() {
  return {
    type: GET_USER_PROFILE_REQUEST,
    payload: {},
  };
}


export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_PRODUCT_FAIL';

export function updateUserRequest(data) {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { data },
  };
}
