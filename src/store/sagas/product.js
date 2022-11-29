import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_DATA_FAIL,
  GET_SINGLE_PRODUCT_DATA_REQUEST,
  GET_SINGLE_PRODUCT_DATA_SUCCESS,
} from '../actions/product';
import Api from '../../Api';

export default function* watcher() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, handleGetProductsRequest);
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(GET_SINGLE_PRODUCT_DATA_REQUEST, handleGetSingleProductRequest);
}

function* handleGetProductsRequest() {
  try {
    const { data } = yield call(Api.getData);
    yield put({
      type: GET_PRODUCT_DATA_SUCCESS,
      payload: { productsData: data },
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleGetSingleProductRequest(action) {
  try {
    const { data } = yield call(Api.getSingleProductData, action.payload.id);
    console.log(data);
    yield put({
      type: GET_SINGLE_PRODUCT_DATA_SUCCESS,
      payload: { productData: data },
    });
  } catch (e) {
    yield put({
      type: GET_SINGLE_PRODUCT_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}
