import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from '../actions/product';
import Api from '../../Api';

function* handleGetProductsRequest(action) {
  try {
    const { data } = yield call(Api.getData, action.payload.page);
    yield put({
      type: GET_PRODUCT_DATA_SUCCESS,
      payload: { productsData: data.product },
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, handleGetProductsRequest);
}
