export const GET_LOCAL_CART_DATA = 'GET_LOCAL_CART_DATA';

export function getLocalCartData() {
  const data = JSON.parse(localStorage.getItem('cartItem'));
  return {
    type: GET_LOCAL_CART_DATA,
    payload: { data },
  };
}

export const GET_CART_ITEM_LIST_REQUEST = 'GET_CART_ITEM_LIST_REQUEST';
export const GET_CART_ITEM_LIST_SUCCESS = 'GET_CART_ITEM_LIST_SUCCESS';
export const GET_CART_ITEM_LIST_FAIL = 'GET_CART_ITEM_LIST_FAIL';

export function getCartItemListRequest(page, cartId) {
  return {
    type: GET_CART_ITEM_LIST_REQUEST,
    payload: { page, cartId },
  };
}

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'CREATE_CART_SUCCESS';
export const ADD_TO_CART_FAIL = 'CREATE_CART_FAIL';

export function addToCartRequest(product, cartId) {
  return {
    type: ADD_TO_CART_REQUEST,
    payload: { product, cartId },
  };
}

export const DELETE_FROM_CART_REQUEST = 'DELETE_FROM_CART_REQUEST';
export const DELETE_FROM_CART_SUCCESS = 'DELETE_FROM_CART_SUCCESS';
export const DELETE_FROM_CART_FAIL = 'DELETE_FROM_CART_FAIL';

export function deleteFromCartRequest(productId) {
  return {
    type: DELETE_FROM_CART_REQUEST,
    payload: { productId },
  };
}
