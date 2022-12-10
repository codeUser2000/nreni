import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_BLOCKQUOTE_DATA_REQUEST,
  GET_BLOCKQUOTE_DATA_SUCCESS,
  GET_BLOCKQUOTE_DATA_FAIL,
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

export default function* watcher() {
  yield takeLatest(GET_BLOCKQUOTE_DATA_REQUEST, handleGetBlockquotesRequest);
}
