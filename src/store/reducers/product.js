import {
  GET_PRODUCT_DATA_FAIL,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_DATA_FAIL,
  GET_SINGLE_PRODUCT_DATA_REQUEST,
  GET_SINGLE_PRODUCT_DATA_SUCCESS,
} from '../actions/product';

const initialState = {
  productsData: [],
  productsDataStatus: '',
  productData: {},
  productDataStatus: '',
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

    case GET_PRODUCT_DATA_SUCCESS:
    {
      const { productsData } = action.payload;
      productsData.map((p) => {
        // p.avatar.split("\").join('/');
       console.log(p);
      });

      return {
        ...state,
        productsDataStatus: 'ok',
        productsData,
      };
    }
    case GET_PRODUCT_DATA_FAIL:
    {
      return {
        ...state,
        productsDataStatus: 'fail',
      };
    }
    case GET_SINGLE_PRODUCT_DATA_REQUEST: {
      return {
        ...state,
        productsData: [],
        productDataStatus: 'request',
      };
    }
    case GET_SINGLE_PRODUCT_DATA_SUCCESS: {
      const { productData } = action.payload;

      return {
        ...state,
        productDataStatus: 'ok',
        productData,
      };
    }
    case GET_SINGLE_PRODUCT_DATA_FAIL: {
      return {
        ...state,
        productDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
