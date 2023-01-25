import {
  GET_CART_ITEM_LIST_REQUEST,
  GET_CART_ITEM_LIST_SUCCESS,
  GET_CART_ITEM_LIST_FAIL,
  GET_LOCAL_CART_DATA,
  GET_CART_ITEM_LIST_ADMIN_REQUEST,
  GET_CART_ITEM_LIST_ADMIN_FAIL,
  GET_CART_ITEM_LIST_ADMIN_SUCCESS,
} from '../actions/cart';

const initialState = {
  cartData: [],
  cartDataStatus: '',
  cartAdminData: [],
  cartAdminDataStatus: '',
  userCartData: [],
  userCartDataStatus: '',
  pagination: 1,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCAL_CART_DATA: {
      const { data } = action.payload;
      return {
        ...state,
        cartDataStatus: 'ok',
        cartData: data,
      };
    }
    case GET_CART_ITEM_LIST_REQUEST: {
      return {
        ...state,
        userCartData: [],
        userCartDataStatus: 'request',
      };
    }

    case GET_CART_ITEM_LIST_SUCCESS: {
      console.log(action.payload.data,9);
      const { cartItem } = action.payload.data;
      return {
        ...state,
        userCartDataStatus: 'ok',
        userCartData: cartItem,
      };
    }

    case GET_CART_ITEM_LIST_FAIL: {
      return {
        ...state,
        userCartDataStatus: 'fail',
      };
    }

    case GET_CART_ITEM_LIST_ADMIN_REQUEST: {
      return {
        ...state,
        cartAdminData: [],
        cartAdminDataStatus: 'request',
      };
    }

    case GET_CART_ITEM_LIST_ADMIN_SUCCESS: {
      console.log(action.payload.data);
      const { cartItem } = action.payload.data;
      return {
        ...state,
        cartAdminDataStatus: 'ok',
        cartAdminData: cartItem,
        pagination: action.payload.data.totalPages,
      };
    }

    case GET_CART_ITEM_LIST_ADMIN_FAIL: {
      return {
        ...state,
        cartAdminDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
