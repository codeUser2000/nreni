import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  GET_BLOCKQUOTE_DATA_REQUEST,
  GET_BLOCKQUOTE_DATA_SUCCESS,
  GET_BLOCKQUOTE_DATA_FAIL,
  CREATE_BLOCKQUOTE_SUCCESS,
  CREATE_BLOCKQUOTE_FAIL,
  CREATE_BLOCKQUOTE_REQUEST,
} from '../actions/blockquote';
import Api from '../../Api';

function* handleGetBlockquotesRequest(action) {
  try {
    const { data } = yield call(Api.getData, action.payload.page);
    yield put({
      type: GET_BLOCKQUOTE_DATA_SUCCESS,
      payload: { productsData: data.product },
    });
  } catch (e) {
    yield put({
      type: GET_BLOCKQUOTE_DATA_FAIL,
      payload: { error: e.message },
    });
  }
}

function* handleCreateBlockquoteRequest(action) {
  try {
    const { data } = yield call(Api.setBlockquote, action.payload.data);
    toast.success('Your blockquote is setted');
    yield put({
      type: CREATE_BLOCKQUOTE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: CREATE_BLOCKQUOTE_FAIL,
      payload: { error: e.response },
    });
  }
}

export default function* watcher() {
  yield takeLatest(CREATE_BLOCKQUOTE_REQUEST, handleCreateBlockquoteRequest);
  yield takeLatest(GET_BLOCKQUOTE_DATA_REQUEST, handleGetBlockquotesRequest);
}
