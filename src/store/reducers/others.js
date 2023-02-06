import {
  GET_ORDER_LIST_ADMIN_FAIL,
  GET_ORDER_LIST_ADMIN_REQUEST,
  GET_ORDER_LIST_ADMIN_SUCCESS,
} from '../actions/others';

const initialState = {
  orderData: [],
  orderDataStatus: '',
  pagination: 1,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_LIST_ADMIN_REQUEST: {
      return {
        ...state,
        orderData: [],
        orderDataStatus: 'request',
      };
    }

    case GET_ORDER_LIST_ADMIN_SUCCESS: {
      const { orders } = action.payload.data;
      return {
        ...state,
        orderDataStatus: 'ok',
        orderData: orders,
        pagination: action.payload.data.totalPages,
      };
    }

    case GET_ORDER_LIST_ADMIN_FAIL: {
      return {
        ...state,
        orderDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
