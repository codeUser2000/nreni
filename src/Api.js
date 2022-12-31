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

  static getUserProfile() {
    return api.get('/users/profile');
  }

  static setBlockquote(data) {
    return api.post('/blockquote/blockquote', data);
  }

  static getBlockquote() {
    return api.get('/blockquote/getBlockquote');
  }

  static deleteBlockquote(id) {
    return api.post('/blockquote/deleteBlockquote', { id });
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

  static addToCart(data, cartId) {
    console.log(data);
    return api.post('/cart/addToCart', {
      productId: data.product.id,
      quantity: data.quantity,
      price: data.price,
      cartId,
    });
  }

  static deleteFromCart(productId) {
    return api.post('/cart/deleteFromCart', { productId });
  }

  static getCartItemsList(page, cartId) {
    console.log(cartId);
    return api.get(`/cart/cartItemList?cartId=${cartId}?page=${page || 1}`);
  }
}

export default Api;
