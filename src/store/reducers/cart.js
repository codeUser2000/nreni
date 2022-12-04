import {
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAIL,
} from '../actions/cart';

const initialState = {
  productsData: [],
  productsDataStatus: '',
  productData: {},
  productDataStatus: '',
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_DATA_REQUEST: {
      return {
        ...state,
        productsData: [],
        productsDataStatus: 'request',
      };
    }

    case GET_CART_DATA_SUCCESS:
    {
      const { productsData } = action.payload;
      return {
        ...state,
        productsDataStatus: 'ok',
        productsData,
      };
    }
    case GET_CART_DATA_FAIL:
    {
      return {
        ...state,
        productsDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
