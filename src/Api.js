import axios from 'axios';
import Account from './helpers/Account';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.request.use(
  // eslint-disable-next-line no-unused-vars
  (config) => {
    config.headers = { Authorization: Account.getAdminToken() || Account.getToken() };
    return config;
  },
  (err) => Promise.reject(err),
);

class Api {
  static getData(data) {
    return api.get(`/products/products?page=${data.page}${data.min ? `&min=${data.min}` : ''}${data.max ? `&max=${data.max}` : ''}${data.filterArr ? `&filter=${data.filterArr}` : ''}`, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  }

  static setBlockquote(data) {
    return api.post('/users/blockquote', data);
  }

  static getBlockquote() {
    return api.get('/users/getBlockquote');
  }

  static deleteBlockquote(id) {
    return api.post('/users/deleteBlockquote', { id });
  }

  static getUser(page) {
    return api.get(`/users/list?page=${page || 1}`);
  }

  static deleteUser(email) {
    return api.post('/users/delete', { email });
  }

  static userSelfDelete(email) {
    return api.post('/users/deleteSelf', { email });
  }

  static deleteProduct(id) {
    return api.post('/products/delete', { id });
  }

  static updateProduct(data) {
    return api.post('/products/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static createProduct(data) {
    return api.post(
      '/products/createProducts',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }

  static register(data) {
    return api.post('/users/register', data);
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

  static confirm() {
    return api.get('/users/confirm');
  }

  static adminLogin(data) {
    return api.post('/admin', data);
  }

  static getSingle(id) {
    return api.get(`/products/singleProduct?id=${id}`);
  }

  static confirmToken(data) {
    return api.post('/users/confirm', data);
  }

  static addToCart(data) {
    return api.post('/cart/addToCart', {
      productId: data.id, quantity: data.count, price: +data.price * data.count, cartId: 2,
    });
  }

  static deleteFromCart(productId) {
    return api.post('/cart/deleteFromCart', { productId });
  }

  static getCartItemsList(page) {
    return api.get(`/cart/cartItemList?page=${page || 1}`);
  }
}

export default Api;
