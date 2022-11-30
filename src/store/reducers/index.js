import { combineReducers } from 'redux';
import product from './product';
import users from './users';

export default combineReducers(
  {
    product,
    users,
  },
);
