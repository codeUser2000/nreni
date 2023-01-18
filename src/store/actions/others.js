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
