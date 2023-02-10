export const SET_LIKE_REQUEST = 'SET_LIKE_REQUEST';
export const SET_LIKE_SUCCESS = 'SET_LIKE_SUCCESS';
export const SET_LIKE_FAIL = 'SET_LIKE_FAIL';

export function setLikeRequest(productId) {
  return {
    type: SET_LIKE_REQUEST,
    payload: { productId },
  };
}

export const DELETE_LIKE_REQUEST = 'DELETE_LIKE_REQUEST';
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS';
export const DELETE_LIKE_FAIL = 'DELETE_LIKE_FAIL';

export function deleteLikeRequest(productId) {
  return {
    type: DELETE_LIKE_REQUEST,
    payload: { productId },
  };
}

export const CHECKOUT_PAYMENT_REQUEST = 'CHECKOUT_PAYMENT_REQUEST';
export const CHECKOUT_PAYMENT_SUCCESS = 'CHECKOUT_PAYMENT_SUCCESS';
export const CHECKOUT_PAYMENT_FAIL = 'CHECKOUT_PAYMENT_FAIL';

export function checkoutPaymentRequest(productId) {
  return {
    type: CHECKOUT_PAYMENT_REQUEST,
    payload: { productId },
  };
}

export const GET_ORDER_LIST_ADMIN_REQUEST = 'GET_ORDER_LIST_ADMIN_REQUEST';
export const GET_ORDER_LIST_ADMIN_SUCCESS = 'GET_ORDER_LIST_ADMIN_SUCCESS';
export const GET_ORDER_LIST_ADMIN_FAIL = 'GET_ORDER_LIST_ADMIN_FAIL';

export function getOrderListAdminRequest(page) {
  return {
    type: GET_ORDER_LIST_ADMIN_REQUEST,
    payload: { page },
  };
}
export const GET_ORDER_LIST_USER_REQUEST = 'GET_ORDER_LIST_USER_REQUEST';
export const GET_ORDER_LIST_USER_SUCCESS = 'GET_ORDER_LIST_USER_SUCCESS';
export const GET_ORDER_LIST_USER_FAIL = 'GET_ORDER_LIST_USER_FAIL';

export function getOrderListUserRequest(page) {
  return {
    type: GET_ORDER_LIST_USER_REQUEST,
    payload: { page },
  };
}
