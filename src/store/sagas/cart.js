import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../Api';
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  DELETE_FROM_CART_FAIL,
  DELETE_FROM_CART_REQUEST,
  DELETE_FROM_CART_SUCCESS,
  GET_CART_ITEM_LIST_ADMIN_FAIL,
  GET_CART_ITEM_LIST_ADMIN_REQUEST,
  GET_CART_ITEM_LIST_ADMIN_SUCCESS,
  GET_CART_ITEM_LIST_FAIL,
  GET_CART_ITEM_LIST_REQUEST,
  GET_CART_ITEM_LIST_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,

} from '../actions/cart';

function* handleAddToCartRequest(action) {
  try {
    const { data } = yield call(Api.addToCart, action.payload.product, action.payload.cartId);
    toast.success('The product has been added to the card');
    yield put({
      type: ADD_TO_CART_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    toast.error('Something went wrong :(');
    yield put({
      type: ADD_TO_CART_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleDeleteFromCartRequest(action) {
  try {
    yield call(Api.deleteFromCart, action.payload.productId, action.payload.cartId);
    toast.success('The product has been successfully deleted from the card:)');
    yield put({
      type: DELETE_FROM_CART_SUCCESS,
      payload: {},
    });
  } catch (e) {
    toast.error('Something went wrong :(');
    yield put({
      type: DELETE_FROM_CART_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleCartItemsRequest(action) {
  try {
    const { data } = yield call(Api.getCartItemsList, action.payload.page);
    yield put({
      type: GET_CART_ITEM_LIST_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_CART_ITEM_LIST_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleCartItemsAdminRequest(action) {
  try {
    const { data } = yield call(Api.getCartItem, action.payload.page);
    yield put({
      type: GET_CART_ITEM_LIST_ADMIN_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: GET_CART_ITEM_LIST_ADMIN_FAIL,
      payload: { error: e.response },
    });
  }
}

function* handleCartUpdateRequest(action) {
  try {
    yield call(Api.updateCart, action.payload.data);
    yield put({
      type: UPDATE_CART_SUCCESS,
      payload: {},
    });
  } catch (e) {
    yield put({
      type: UPDATE_CART_FAIL,
      payload: { error: e.response },
    });
  }
}

export default function* watcher() {
  yield takeLatest(ADD_TO_CART_REQUEST, handleAddToCartRequest);
  yield takeLatest(GET_CART_ITEM_LIST_REQUEST, handleCartItemsRequest);
  yield takeLatest(GET_CART_ITEM_LIST_ADMIN_REQUEST, handleCartItemsAdminRequest);
  yield takeLatest(DELETE_FROM_CART_REQUEST, handleDeleteFromCartRequest);
  yield takeLatest(UPDATE_CART_REQUEST, handleCartUpdateRequest);
}
