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
  NEW_USER_PASSWORD_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_USERS_LIST_FAIL,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAIL,
  DELETE_USER_SELF_REQUEST,
  DELETE_USER_SELF_SUCCESS,
  DELETE_USER_SELF_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
} from '../actions/users';
import Api from '../../Api';
import Account from '../../helpers/Account';

function* handleCreateUserRequest(action) {
  try {
    const { data } = yield call(Api.register, action.payload.data);
    if (action.payload.data.status === 'pending') {
      toast.success('Please check your mail for activating your account');
    }
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

function* handleUsersRequest(action) {
  try {
    const { data } = yield call(Api.getUser, action.payload.page, action.payload.search);
    yield put({
      type: GET_USERS_LIST_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_USERS_LIST_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleDeleteUserRequest(action) {
  try {
    yield call(Api.deleteUser, action.payload.email, action.payload.status);
    if (action.payload.status === 'deleted') {
      toast.success('User is activated successfully');
    } else {
      toast.success('User is deleted successfully');
    }
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

function* handleDeleteUserSelfRequest() {
  try {
    yield call(Api.userSelfDelete);
    toast.success('You are deleted successfully');
    Account.logout();
    yield put({
      type: DELETE_USER_SELF_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: DELETE_USER_SELF_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleUserLoginRequest(action) {
  try {
    const {
      formData,
      remember,
    } = action.payload;
    const { data } = yield call(Api.login, formData);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: {
        data,
        remember,
      },
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleAdminLoginRequest(action) {
  try {
    const {
      formData,
      remember,
    } = action.payload;
    const { data } = yield call(Api.adminLogin, formData);
    yield put({
      type: LOGIN_ADMIN_SUCCESS,
      payload: {
        data,
        remember,
      },
    });
  } catch (e) {
    yield put({
      type: LOGIN_ADMIN_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleUserProfileRequest() {
  try {
    const { data } = yield call(Api.getUserProfile);
    yield put({
      type: GET_USER_PROFILE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_USER_PROFILE_FAIL,
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

function* handleUpdateUsersRequest(action) {
  try {
    const { data } = yield call(Api.addresses, action.payload.data);
    toast.success('You are successfully updated');
    yield put({
      type: UPDATE_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: UPDATE_USER_FAIL,
      payload: {
        error: e.response.data,
        data: action.payload.data
      },
    });
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN_USER_REQUEST, handleUserLoginRequest);
  yield takeLatest(LOGIN_ADMIN_REQUEST, handleAdminLoginRequest);
  yield takeLatest(FORGET_USER_PASSWORD_REQUEST, handleUserForgetPasswordRequest);
  yield takeLatest(NEW_USER_PASSWORD_REQUEST, handleUserNewPasswordRequest);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUserRequest);
  yield takeLatest(DELETE_USER_REQUEST, handleDeleteUserRequest);
  yield takeLatest(GET_USERS_LIST_REQUEST, handleUsersRequest);
  yield takeLatest(GET_USER_PROFILE_REQUEST, handleUserProfileRequest);
  yield takeLatest(DELETE_USER_SELF_REQUEST, handleDeleteUserSelfRequest);
  yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUsersRequest);
}
