import { combineReducers } from 'redux';
import product from './product';
import users from './users';
import blockquote from './blockquote';
import cart from './cart';

export default combineReducers(
  {
    product,
    users,
    blockquote,
    cart,
  },
);
