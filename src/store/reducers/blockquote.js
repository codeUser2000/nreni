import {
  GET_BLOCKQUOTE_DATA_REQUEST,
  GET_BLOCKQUOTE_DATA_SUCCESS,
  GET_BLOCKQUOTE_DATA_FAIL,
  GET_SINGLE_BLOCKQUOTE_DATA_REQUEST,
  GET_SINGLE_BLOCKQUOTE_DATA_SUCCESS,
  GET_SINGLE_BLOCKQUOTE_DATA_FAIL,
} from '../actions/blockquote';

const initialState = {
  blockquotesData: [],
  blockquotesDataStatus: '',
  blockquoteData: {},
  blockquoteDataStatus: '',
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
    case GET_SINGLE_BLOCKQUOTE_DATA_REQUEST: {
      return {
        ...state,
        blockquotesData: [],
        blockquotesDataStatus: 'request',
      };
    }
    case GET_SINGLE_BLOCKQUOTE_DATA_SUCCESS: {
      const { blockquoteData } = action.payload;

      return {
        ...state,
        blockquoteDataStatus: 'ok',
        blockquoteData,
      };
    }
    case GET_SINGLE_BLOCKQUOTE_DATA_FAIL: {
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
