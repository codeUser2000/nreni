export const GET_PRODUCT_DATA_REQUEST = 'GET_PRODUCT_DATA_REQUEST';
export const GET_PRODUCT_DATA_SUCCESS = 'GET_PRODUCT_DATA_SUCCESS';
export const GET_PRODUCT_DATA_FAIL = 'GET_PRODUCT_DATA_FAIL';

export function getProductDataRequest(page, min, max) {
  return {
    type: GET_PRODUCT_DATA_REQUEST,
    payload: { page, min, max },
  };
}
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL';

export function createProductRequest(data) {
  console.log(data);
  return {
    type: CREATE_PRODUCT_REQUEST,
    payload: { data },
  };
}
