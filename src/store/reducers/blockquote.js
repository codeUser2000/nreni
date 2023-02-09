import {
  GET_BLOCKQUOTE_DATA_REQUEST,
  GET_BLOCKQUOTE_DATA_SUCCESS,
  GET_BLOCKQUOTE_DATA_FAIL,
  DELETE_BLOCKQUOTE_SUCCESS,
  DELETE_BLOCKQUOTE_REQUEST,
  DELETE_BLOCKQUOTE_FAIL,
  GET_ADMIN_BLOCKQUOTE_DATA_REQUEST,
  GET_ADMIN_BLOCKQUOTE_DATA_SUCCESS,
  GET_ADMIN_BLOCKQUOTE_DATA_FAIL, SET_VIEW_BLOCKQUOTE_SUCCESS, SET_VIEW_BLOCKQUOTE_REQUEST,
} from '../actions/blockquote';

const initialState = {
  blockquotesData: [],
  blockquotesDataStatus: '',
  blockquotesDataAdmin: [],
  blockquotesDataStatusAdmin: '',
  pagination: 0,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKQUOTE_DATA_REQUEST: {
      return {
        ...state,
        blockquotesData: [],
        blockquotesDataStatus: 'request',
      };
    }
    case SET_VIEW_BLOCKQUOTE_REQUEST: {
      return {
        ...state,
        blockquotesDataAdmin: [],
        blockquotesDataStatusAdmin: 'request',
      };
    }

    case GET_BLOCKQUOTE_DATA_SUCCESS: {
      const { quote } = action.payload;
      return {
        ...state,
        blockquotesDataStatus: 'ok',
        blockquotesData: quote,
      };
    }
    case SET_VIEW_BLOCKQUOTE_SUCCESS: {
      const { quote } = action.payload.data;
      return {
        ...state,
        blockquotesDataStatusAdmin: 'ok',
        blockquotesDataAdmin: quote,
      };
    }

    case GET_BLOCKQUOTE_DATA_FAIL:
    {
      return {
        ...state,
        blockquotesDataStatus: 'fail',
      };
    }

    case GET_ADMIN_BLOCKQUOTE_DATA_REQUEST: {
      return {
        ...state,
        blockquotesDataAdmin: [],
        blockquotesDataStatusAdmin: 'request',
      };
    }

    case GET_ADMIN_BLOCKQUOTE_DATA_SUCCESS: {
      const { quote, totalPages } = action.payload.data;
      return {
        ...state,
        blockquotesDataStatusAdmin: 'ok',
        blockquotesDataAdmin: quote,
        pagination: +totalPages,
      };
    }
    case GET_ADMIN_BLOCKQUOTE_DATA_FAIL:
    {
      return {
        ...state,
        blockquotesDataAdmin: [],
        blockquotesDataStatusAdmin: 'fail',
      };
    }
    case DELETE_BLOCKQUOTE_REQUEST: {
      return {
        ...state,
        blockquotesDataAdmin: [],
        blockquotesDataStatusAdmin: 'request',
      };
    }
    case DELETE_BLOCKQUOTE_SUCCESS: {
      const { blockquotes, totalPages } = action.payload.data;

      return {
        ...state,
        blockquotesDataStatusAdmin: 'ok',
        blockquotesDataAdmin: [...blockquotes],
        pagination: +totalPages,
      };
    }
    case DELETE_BLOCKQUOTE_FAIL: {
      return {
        ...state,
        blockquotesDataStatusAdmin: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
