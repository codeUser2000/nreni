import {
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAIL,
} from '../actions/cart';

const initialState = {
  cartData: [],
  cartDataStatus: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_DATA_REQUEST: {
      return {
        ...state,
        cartData: [],
        cartDataStatus: 'request',
      };
    }

    case GET_CART_DATA_SUCCESS:
    {
      const { data } = action.payload;
      return {
        ...state,
        cartDataStatus: 'ok',
        cartData: data,
      };
    }
    case GET_CART_DATA_FAIL:
    {
      return {
        ...state,
        cartDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
