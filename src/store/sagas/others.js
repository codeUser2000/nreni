import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Api from '../../Api';
import {
  CHECKOUT_PAYMENT_FAIL,
  CHECKOUT_PAYMENT_REQUEST,
  CHECKOUT_PAYMENT_SUCCESS,
  DELETE_LIKE_FAIL,
  DELETE_LIKE_REQUEST,
  DELETE_LIKE_SUCCESS,
  GET_ORDER_LIST_ADMIN_FAIL,
  GET_ORDER_LIST_ADMIN_REQUEST,
  GET_ORDER_LIST_ADMIN_SUCCESS,
  GET_ORDER_LIST_USER_FAIL,
  GET_ORDER_LIST_USER_REQUEST,
  GET_ORDER_LIST_USER_SUCCESS,
  SET_LIKE_FAIL,
  SET_LIKE_REQUEST,
  SET_LIKE_SUCCESS, SET_ORDER_STATUS_FAIL, SET_ORDER_STATUS_REQUEST, SET_ORDER_STATUS_SUCCESS,
} from '../actions/others';

function* handleSetLikeRequest(action) {
  try {
    const { data } = yield call(Api.likeProduct, action.payload.productId);
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
function* handleDeleteLikeRequest(action) {
  try {
    const { data } = yield call(Api.deleteLikeProduct, action.payload.productId);
    yield put({
      type: DELETE_LIKE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: DELETE_LIKE_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleOrderItemsAdminRequest(action) {
  try {
    const { data } = yield call(Api.getOrders, action.payload.page);
    yield put({
      type: GET_ORDER_LIST_ADMIN_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_ORDER_LIST_ADMIN_FAIL,
      payload: { error: e.response },
    });
  }
}
function* handleOrderItemsUserRequest(action) {
  try {
    const { data } = yield call(Api.getSingleOrders, action.payload.page);
    yield put({
      type: GET_ORDER_LIST_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_ORDER_LIST_USER_FAIL,
      payload: { error: e.response },
    });
  }
}
function* handleOrderItemSetStatusRequest(action) {
  try {
    const { data } = yield call(Api.setOrderStatus, action.payload.data);
    yield put({
      type: SET_ORDER_STATUS_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: SET_ORDER_STATUS_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleCheckoutPaymentRequest(action) {
  try {
    const { data } = yield call(Api.checkoutPayment, action.payload.productId);
    window.location.href = data.url;
    yield put({
      type: CHECKOUT_PAYMENT_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    toast.error(e.response.data.message);
    yield put({
      type: CHECKOUT_PAYMENT_FAIL,
      payload: { error: e.message },
    });
  }
}

export default function* watcher() {
  yield takeLatest(SET_LIKE_REQUEST, handleSetLikeRequest);
  yield takeLatest(DELETE_LIKE_REQUEST, handleDeleteLikeRequest);
  yield takeLatest(CHECKOUT_PAYMENT_REQUEST, handleCheckoutPaymentRequest);
  yield takeLatest(GET_ORDER_LIST_ADMIN_REQUEST, handleOrderItemsAdminRequest);
  yield takeLatest(GET_ORDER_LIST_USER_REQUEST, handleOrderItemsUserRequest);
  yield takeLatest(SET_ORDER_STATUS_REQUEST, handleOrderItemSetStatusRequest);
}
