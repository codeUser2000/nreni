import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from '../actions/product';

const initialState = {
  productsData: [],
  productsDataStatus: '',
  productData: {},
  productDataStatus: '',
  productPrice: {},
  pagination: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA_REQUEST: {
      return {
        ...state,
        productsData: [],
        productsDataStatus: 'request',
      };
    }

    case GET_PRODUCT_DATA_SUCCESS:
    {
      const { data } = action.payload;
      return {
        ...state,
        productsDataStatus: 'ok',
        productsData: data.product,
        productPrice: data.productPrice[0],
        pagination: +data.totalPages,
      };
    }
    case GET_PRODUCT_DATA_FAIL:
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
