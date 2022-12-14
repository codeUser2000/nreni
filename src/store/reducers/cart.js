import {
  // eslint-disable-next-line import/named
  GET_CART_ITEM_LIST_REQUEST,
  // eslint-disable-next-line import/named
  GET_CART_ITEM_LIST_SUCCESS,
  // eslint-disable-next-line import/named
  GET_CART_ITEM_LIST_FAIL,
  GET_LOCAL_CART_DATA,
} from '../actions/cart';

const initialState = {
  cartData: [],
  cartDataStatus: '',
  userCartData: [],
  userCartDataStatus: '',
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
    default: {
      return {
        ...state,
      };
    }
  }
}
