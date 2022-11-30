import { all, fork } from 'redux-saga/effects';
import product from './product';
import users from './users';

export default function* watchers() {
  yield all([
    product,
    users,
  ].map(fork));
}
