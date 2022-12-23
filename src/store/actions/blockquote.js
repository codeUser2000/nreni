export const GET_BLOCKQUOTE_DATA_REQUEST = 'GET_BLOCKQUOTE_DATA_REQUEST';
export const GET_BLOCKQUOTE_DATA_SUCCESS = 'GET_BLOCKQUOTE_DATA_SUCCESS';
export const GET_BLOCKQUOTE_DATA_FAIL = 'GET_BLOCKQUOTE_DATA_FAIL';

export function getBlockquoteDataRequest() {
  return {
    type: GET_BLOCKQUOTE_DATA_REQUEST,
    payload: {},
  };
}

export const CREATE_BLOCKQUOTE_REQUEST = 'CREATE_BLOCKQUOTE_REQUEST';
export const CREATE_BLOCKQUOTE_SUCCESS = 'CREATE_BLOCKQUOTE_SUCCESS';
export const CREATE_BLOCKQUOTE_FAIL = 'CREATE_BLOCKQUOTE_FAIL';

export function createBlockquoteRequest(data) {
  return {
    type: CREATE_BLOCKQUOTE_REQUEST,
    payload: { data },
  };
}

// export const GET_SINGLE_BLOCKQUOTE_DATA_REQUEST = 'GET_SINGLE_BLOCKQUOTE_DATA_REQUEST';
// export const GET_SINGLE_BLOCKQUOTE_DATA_SUCCESS = 'GET_SINGLE_BLOCKQUOTE_DATA_SUCCESS';
// export const GET_SINGLE_BLOCKQUOTE_DATA_FAIL = 'GET_SINGLE_BLOCKQUOTE_DATA_FAIL';
//
// export function getSingleBlockquoteDataRequest(id) {
//   return {
//     type: GET_SINGLE_BLOCKQUOTE_DATA_REQUEST,
//     payload: { id },
//   };
// }

export const DELETE_BLOCKQUOTE_REQUEST = 'DELETE_BLOCKQUOTE_REQUEST';
export const DELETE_BLOCKQUOTE_SUCCESS = 'DELETE_BLOCKQUOTE_SUCCESS';
export const DELETE_BLOCKQUOTE_FAIL = 'DELETE_BLOCKQUOTE_FAIL';

export function deleteBlockquoteRequest(id) {
  return {
    type: DELETE_BLOCKQUOTE_REQUEST,
    payload: { id },
  };
}
