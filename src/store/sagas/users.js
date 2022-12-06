import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  FORGET_USER_PASSWORD_REQUEST,
  FORGET_USER_PASSWORD_SUCCESS,
  FORGET_USER_PASSWORD_FAIL,
  NEW_USER_PASSWORD_REQUEST,
  NEW_USER_PASSWORD_SUCCESS,
  NEW_USER_PASSWORD_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,
  // GET_USERS_LIST_FAIL,
  // GET_USERS_LIST_REQUEST,
  // GET_USERS_LIST_SUCCESS, getUsersListRequest,
} from '../actions/users';
import Api from '../../Api';
import Account from '../../helpers/Account';

// function* handleUserLoginRequest() {
//   try {
//     const { data } = yield call(Api.login);
//     yield put({
//       type: GET_USERS_LIST_SUCCESS,
//       payload: { data: data.results },
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USERS_LIST_FAIL,
//       payload: { error: e.message },
//     });
//   }
// }

function* handleCreateUserRequest(action) {
  try {
    const { data } = yield call(Api.register, action.payload.data);
    toast.success('Please check your mail for activating your account');
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: CREATE_USER_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleDeleteUserRequest(action) {
  try {
    yield call(Api.deleteUser, action.payload.data);
    Account.logout();
    toast.success('User is deleted successfully');
    yield put({
      type: DELETE_USER_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: DELETE_USER_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleUserLoginRequest(action) {
  try {
    const { formData, remember } = action.payload;
    const { data } = yield call(Api.login, formData);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { data, remember },
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleUserForgetPasswordRequest(action) {
  try {
    const { data } = yield call(Api.forgetPass, action.payload.email);
    yield put({
      type: FORGET_USER_PASSWORD_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: FORGET_USER_PASSWORD_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleUserNewPasswordRequest(action) {
  try {
    yield call(Api.setNewPassword, action.payload.data);
    yield put({
      type: NEW_USER_PASSWORD_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: NEW_USER_PASSWORD_FAIL,
      payload: { error: e.response },
    });
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN_USER_REQUEST, handleUserLoginRequest);
  yield takeLatest(FORGET_USER_PASSWORD_REQUEST, handleUserForgetPasswordRequest);
  yield takeLatest(NEW_USER_PASSWORD_REQUEST, handleUserNewPasswordRequest);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUserRequest);
  yield takeLatest(DELETE_USER_REQUEST, handleDeleteUserRequest);
}
