import Api from '../../Api';

export const GET_PRODUCT_DATA_REQUEST = 'GET_PRODUCT_DATA_REQUEST';

export const GET_PRODUCT_DATA_SUCCESS = 'GET_PRODUCT_DATA_SUCCESS';
export const GET_PRODUCT_DATA_FAIL = 'GET_PRODUCT_DATA_FAIL';

export function getProductDataRequest() {
  return {
    type: GET_PRODUCT_DATA_REQUEST,
    payload: {},
  };
}

export const GET_SINGLE_PRODUCT_DATA_REQUEST = 'GET_SINGLE_PRODUCT_DATA_REQUEST';
export const GET_SINGLE_PRODUCT_DATA_SUCCESS = 'GET_SINGLE_PRODUCT_DATA_SUCCESS';
export const GET_SINGLE_PRODUCT_DATA_FAIL = 'GET_SINGLE_PRODUCT_DATA_FAIL';

export function getSingleProductDataRequest(id) {
  return {
    type: GET_SINGLE_PRODUCT_DATA_REQUEST,
    payload: { id },
  };
}
