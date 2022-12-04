import Api from '../../Api';

export const GET_CART_DATA_REQUEST = 'GET_CART_DATA_REQUEST';
export const GET_CART_DATA_SUCCESS = 'GET_CART_DATA_SUCCESS';
export const GET_CART_DATA_FAIL = 'GET_CART_DATA_FAIL';

export function getProductDataRequest() {
  return {
    type: GET_CART_DATA_REQUEST,
    payload: {},
  };
}
