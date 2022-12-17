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
  static getData(data) {
    return api.get(`/products/products?page=${data.page}${data.min ? `&min=${data.min}` : ''}${data.max ? `&max=${data.max}` : ''}`, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  }

  static deleteUser(data) {
    return api.post('/users/deleteUser', data);
  }

  static setBlockquote(data) {
    return api.post('/users/blockquote', data);
  }

  static getBlockquote() {
    return api.get('/users/getBlockquote');
  }

  static getUser(page) {
    return api.get(`/users/list?page=${page || 1}`);
  }

  static login(data) {
    return api.post('/users/login', data);
  }

  static createProduct(data) {
    return api.post('/products/createProducts', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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

  static adminLogin() {
    return api.post('/admin');
  }

  // static getCategoryData(category) {
  //   return api.get(`shop/${category}`);
  // }
  //
  // static getCartDate(category) {
  //   return api.get(`shop/${category}`);
  // }
}

export default Api;
