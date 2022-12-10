import { all, fork } from 'redux-saga/effects';
import product from './product';
import users from './users';
import blockquote from './blockquote';

export default function* watchers() {
  yield all([
    product,
    users,
    blockquote,
  ].map(fork));
}
