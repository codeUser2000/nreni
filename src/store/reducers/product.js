import {
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_ADMIN_DATA_FAIL,
  GET_PRODUCT_ADMIN_DATA_SUCCESS,
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
} from '../actions/product';

const initialState = {
  productsData: [],
  productsDataStatus: '',
  productData: {},
  productDataStatus: '',
  productPrice: {},
  pagination: 0,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA_REQUEST: {
      return {
        ...state,
        productsData: [],
        productsDataStatus: 'request',
      };
    }

    case CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        productsData: [...action.payload.data.products],
        pagination: +action.payload.data.totalPages,
      };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        productsData: [...action.payload.data.products],
        pagination: +action.payload.data.totalPages,
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        productsData: [...action.payload.data.products],
        pagination: +action.payload.data.totalPages,
      };
    }

    case GET_PRODUCT_DATA_SUCCESS:
    {
      const { data } = action.payload;
      return {
        ...state,
        productsDataStatus: 'ok',
        productsData: data.products,
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
    case GET_PRODUCT_ADMIN_DATA_SUCCESS:
    {
      const { data } = action.payload;
      return {
        ...state,
        productsDataStatus: 'ok',
        productsData: data.products,
        pagination: +data.totalPages,
      };
    }
    case GET_PRODUCT_ADMIN_DATA_FAIL:
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
