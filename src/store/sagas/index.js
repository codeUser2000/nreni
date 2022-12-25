import { all, fork } from 'redux-saga/effects';
import product from './product';
import users from './users';
import blockquote from './blockquote';
import cart from './cart';

export default function* watchers() {
  yield all([
    product,
    users,
    blockquote,
    cart,
  ].map(fork));
}
