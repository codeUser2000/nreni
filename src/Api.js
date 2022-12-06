import axios from 'axios';
import Account from './helpers/Account';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: Account.getToken(),
    'Content-type': 'application/json',
  },
});

api.interceptors.request.use(
  // eslint-disable-next-line no-unused-vars
  (config) => config,
);

class Api {
  static getData() {
    return api.get('/products');
  }

  static deleteUser(data) {
    return api.post('/deleteUser', data);
  }

  static login(data) {
    return api.post('/users/login', data);
  }

  static forgetPass(email) {
    return api.post('/users/forget', { email });
  }

  static setNewPassword(data) {
    return api.post('/users/newPassword', data);
  }

  static register(data) {
    return api.post('/users/register', data);
  }

  static confirm() {
    return api.get('/users/confirm');
  }

  static getCategoryData(category) {
    return api.get(`shop/${category}`);
  }

  static getCartDate(category) {
    return api.get(`shop/${category}`);
  }
}

export default Api;
