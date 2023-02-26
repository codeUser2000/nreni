import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  GET_PRODUCT_ADMIN_DATA_SUCCESS,
  GET_PRODUCT_ADMIN_DATA_FAIL,
  GET_PRODUCT_ADMIN_DATA_REQUEST,
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

function* handleGetProductsAdminRequest(action) {
  try {
    const { data } = yield call(Api.getDataAdmin, action.payload);
    yield put({
      type: GET_PRODUCT_ADMIN_DATA_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_ADMIN_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleCreateProductsRequest(action) {
  try {
    const { data } = yield call(Api.createProduct, action.payload.data);
    toast.success('Product is created');
    yield put({
      type: CREATE_PRODUCT_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    toast.error(e.response.data.message);
    yield put({
      type: CREATE_PRODUCT_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleDeleteProductsRequest(action) {
  try {
    const { data } = yield call(Api.deleteProduct, action.payload.id);
    toast.success('Product is deleted successfully :)');
    yield put({
      type: DELETE_PRODUCT_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    toast.error(e.response.data.message);
    yield put({
      type: DELETE_PRODUCT_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleUpdateProductsRequest(action) {
  try {
    const { data } = yield call(Api.updateProduct, action.payload.data);
    toast.success('Product is updated successfully :)');

    yield put({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    toast.error(e.response.data.message);
    yield put({
      type: UPDATE_PRODUCT_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(CREATE_PRODUCT_REQUEST, handleCreateProductsRequest);
  yield takeLatest(DELETE_PRODUCT_REQUEST, handleDeleteProductsRequest);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, handleUpdateProductsRequest);
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, handleGetProductsRequest);
  yield takeLatest(GET_PRODUCT_ADMIN_DATA_REQUEST, handleGetProductsAdminRequest);
}
