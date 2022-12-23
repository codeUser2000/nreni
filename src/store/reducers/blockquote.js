import {
  GET_BLOCKQUOTE_DATA_REQUEST,
  GET_BLOCKQUOTE_DATA_SUCCESS,
  GET_BLOCKQUOTE_DATA_FAIL,
  DELETE_BLOCKQUOTE_SUCCESS,
  DELETE_BLOCKQUOTE_REQUEST,
  DELETE_BLOCKQUOTE_FAIL,
  // GET_SINGLE_BLOCKQUOTE_DATA_REQUEST,
  // GET_SINGLE_BLOCKQUOTE_DATA_SUCCESS,
  // GET_SINGLE_BLOCKQUOTE_DATA_FAIL,
} from '../actions/blockquote';

const initialState = {
  blockquotesData: [],
  blockquotesDataStatus: '',
  pagination: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKQUOTE_DATA_REQUEST: {
      return {
        ...state,
        blockquotesData: [],
        blockquotesDataStatus: 'request',
      };
    }

    case GET_BLOCKQUOTE_DATA_SUCCESS:
    {
      const { quote } = action.payload;
      return {
        ...state,
        blockquotesDataStatus: 'ok',
        blockquotesData: quote,
      };
    }
    case GET_BLOCKQUOTE_DATA_FAIL:
    {
      return {
        ...state,
        blockquotesDataStatus: 'fail',
      };
    }
    case DELETE_BLOCKQUOTE_REQUEST: {
      return {
        ...state,
        blockquotesData: [],
        blockquotesDataStatus: 'request',
      };
    }
    case DELETE_BLOCKQUOTE_SUCCESS: {
      const { blockquotes, totalPages } = action.payload.data;

      return {
        ...state,
        blockquoteDataStatus: 'ok',
        blockquotesData: [...blockquotes],
        pagination: +totalPages,
      };
    }
    case DELETE_BLOCKQUOTE_FAIL: {
      return {
        ...state,
        blockquoteDataStatus: 'fail',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
