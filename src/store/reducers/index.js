import { combineReducers } from 'redux';
import product from './product';
import users from './users';
import blockquote from './blockquote';

export default combineReducers(
  {
    product,
    users,
    blockquote,
  },
);
