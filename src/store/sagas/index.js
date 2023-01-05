import { all, fork } from 'redux-saga/effects';
import product from './product';
import users from './users';
import blockquote from './blockquote';
import cart from './cart';
import others from './others';

export default function* watchers() {
  yield all([
    others,
    product,
    users,
    blockquote,
    cart,
  ].map(fork));
}
