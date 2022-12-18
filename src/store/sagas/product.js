import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} from '../actions/product';
import Api from '../../Api';

function* handleGetProductsRequest(action) {
  try {
    const { data } = yield call(Api.getData, action.payload);
    yield put({
      type: GET_PRODUCT_DATA_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}
function* handleCreateProductsRequest(action) {
  try {
    const { data } = yield call(Api.createProduct, action.payload.data);
    yield put({
      type: CREATE_PRODUCT_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: CREATE_PRODUCT_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, handleGetProductsRequest);
  yield takeLatest(CREATE_PRODUCT_REQUEST, handleCreateProductsRequest);
}
