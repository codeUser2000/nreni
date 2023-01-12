import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../Api';
import {
  GET_MENU_FAIL,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS, SET_LIKE_FAIL,
  SET_LIKE_REQUEST, SET_LIKE_SUCCESS
} from '../actions/others';

function* handleMenuGetRequest() {
  try {
    const { data } = yield call(Api.getMenu);
    yield put({
      type: GET_MENU_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_MENU_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleSetLikeRequest(action) {
  try {
    const { data } = yield call(Api.likeProduct, action.payload.productId, action.payload.set);
    yield put({
      type: SET_LIKE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: SET_LIKE_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_MENU_REQUEST, handleMenuGetRequest);
  yield takeLatest(SET_LIKE_REQUEST, handleSetLikeRequest);
}
