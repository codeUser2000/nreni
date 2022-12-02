import { takeLatest, call, put } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  // GET_USERS_LIST_FAIL,
  // GET_USERS_LIST_REQUEST,
  // GET_USERS_LIST_SUCCESS, getUsersListRequest,
} from '../actions/users';
import Api from '../../Api';

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
    yield call(Api.register, action.payload.data);
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: CREATE_USER_FAIL,
      payload: { error: e.response.data.errors },
    });
  }
}
function* handleUserLoginRequest(action) {
  try {
    const { data } = yield call(Api.login, action.payload.data);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAIL,
      payload: { error: e.response.data.errors },
    });
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN_USER_REQUEST, handleUserLoginRequest);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUserRequest);
}
