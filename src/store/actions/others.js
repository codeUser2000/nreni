export const GET_MENU_REQUEST = 'GET_MENU_REQUEST';
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';
export const GET_MENU_FAIL = 'GET_MENU_FAIL';

export function getMenuRequest() {
  return {
    type: GET_MENU_REQUEST,
    payload: {},
  };
}
