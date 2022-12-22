import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAIL,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAIL,
} from '../actions/cart';
import Api from '../../Api';

function* handleGetCartRequest() {
  try {
    const { data } = yield call(Api.getCart);
    yield put({
      type: GET_CART_DATA_SUCCESS,
      payload: { data: data.data },
    });
  } catch (e) {
    yield put({
      type: GET_CART_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleDeleteCartItemRequest(action) {
  try {
    yield call(Api.deleteCartItem, action.payload.id);
    yield put({
      type: DELETE_CART_ITEM_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: DELETE_CART_ITEM_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_CART_DATA_REQUEST, handleGetCartRequest);
  yield takeLatest(DELETE_CART_ITEM_REQUEST, handleDeleteCartItemRequest);
}
