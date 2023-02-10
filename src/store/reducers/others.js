import {
  GET_ORDER_LIST_ADMIN_FAIL,
  GET_ORDER_LIST_ADMIN_REQUEST,
  GET_ORDER_LIST_ADMIN_SUCCESS,
  GET_ORDER_LIST_USER_FAIL,
  GET_ORDER_LIST_USER_REQUEST,
  GET_ORDER_LIST_USER_SUCCESS,
} from '../actions/others';

const initialState = {
  orderData: [],
  orderDataStatus: '',
  orderDataUser: [],
  orderDataUserStatus: '',
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
    case GET_ORDER_LIST_USER_REQUEST: {
      return {
        ...state,
        orderDataUser: [],
        orderDataUserStatus: 'request',
      };
    }

    case GET_ORDER_LIST_USER_SUCCESS: {
      const { orders } = action.payload.data;
      const allProduct = [];
      orders.map((o) => {
        o.products.map((p) => {
          p.deliveryStatus = o.deliveryStatus;
          return p;
        });
        allProduct.push(...o.products);
        return true;
      });

      console.log(allProduct);
      return {
        ...state,
        orderDataUserStatus: 'ok',
        orderDataUser: allProduct,
        pagination: action.payload.data.totalPages,
      };
    }

    case GET_ORDER_LIST_USER_FAIL: {
      return {
        ...state,
        orderDataUserStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
