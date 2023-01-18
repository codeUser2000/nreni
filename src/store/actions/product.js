export const GET_PRODUCT_DATA_REQUEST = 'GET_PRODUCT_DATA_REQUEST';
export const GET_PRODUCT_DATA_SUCCESS = 'GET_PRODUCT_DATA_SUCCESS';
export const GET_PRODUCT_DATA_FAIL = 'GET_PRODUCT_DATA_FAIL';

export function getProductDataRequest(page, min, max, filter) {
  const filterArr = filter?.join(',');
  return {
    type: GET_PRODUCT_DATA_REQUEST,
    payload: {
      page, min, max, filterArr,
    },
  };
}

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL';

export function createProductRequest(data) {
  return {
    type: CREATE_PRODUCT_REQUEST,
    payload: { data },
  };
}

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

export function deleteProductRequest(id) {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: { id },
  };
}

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';

export function updateProductRequest(data) {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: { data },
  };
}
