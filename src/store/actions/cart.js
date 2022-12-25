export const GET_CART_DATA_REQUEST = 'GET_CART_DATA_REQUEST';
export const GET_CART_DATA_SUCCESS = 'GET_CART_DATA_SUCCESS';
export const GET_CART_DATA_FAIL = 'GET_CART_DATA_FAIL';

export function getCartDataRequest() {
  return {
    type: GET_CART_DATA_REQUEST,
    payload: {},
  };
}

export const DELETE_CART_ITEM_REQUEST = 'DELETE_CART_ITEM_REQUEST';
export const DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS';
export const DELETE_CART_ITEM_FAIL = 'DELETE_CART_ITEM_FAIL';

export function deleteCartItemRequest(id) {
  return {
    type: DELETE_CART_ITEM_REQUEST,
    payload: { id },
  };
}

export const GET_LOCAL_CART_DATA = 'GET_LOCAL_CART_DATA';
export function getLocalCartData() {
  const data = JSON.parse(localStorage.getItem('cartItem'));
  console.log(data);
  return {
    type: GET_LOCAL_CART_DATA,
    payload: { data },
  };
}
