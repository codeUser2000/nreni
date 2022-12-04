import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAIL,
} from '../actions/cart';
import Api from '../../Api';

export default function* watcher() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(GET_CART_DATA_REQUEST, handleGetProductsRequest);
}

function* handleGetProductsRequest() {
  try {
    const { data } = yield call(Api.getCartDate);
    yield put({
      type: GET_CART_DATA_SUCCESS,
      payload: { productsData: data },
    });
  } catch (e) {
    yield put({
      type: GET_CART_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}
