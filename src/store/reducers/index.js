import { combineReducers } from 'redux';
import product from './product';
import users from './users';
import blockquote from './blockquote';
import cart from './cart';
import others from './others';

export default combineReducers(
  {
    product,
    users,
    blockquote,
    cart,
    others,
  },
);
