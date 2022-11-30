import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USERS_LIST_FAIL,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS, getUsersListRequest,
} from '../actions/users';
import Api from '../../Api';

function* handleGetUsersListRequest() {
  try {
    const { data } = yield call(Api.getUsersList);
    yield put({
      type: GET_USERS_LIST_SUCCESS,
      payload: { data: data.results },
    });
  } catch (e) {
    yield put({
      type: GET_USERS_LIST_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleCreateUserRequest(action) {
  try {
    yield call(Api.register, action.payload.data);
    yield put(getUsersListRequest());
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: CREATE_USER_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_USERS_LIST_REQUEST, handleGetUsersListRequest);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUserRequest);
}
