import { GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS } from '../actions/others';

const initialState = {
  menuData: [],
  menuDataStatus: '',
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_REQUEST: {
      return {
        ...state,
        menuData: [],
        menuDataStatus: 'request',
      };
    }

    case GET_MENU_SUCCESS:
    {
      const { data } = action.payload;
      return {
        ...state,
        menuDataStatus: 'ok',
        menuData: data.menu,
      };
    }
    case GET_MENU_FAIL:
    {
      return {
        ...state,
        menuDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
