import axios from 'axios';
import Account from './helpers/Account';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  Authorization: Account.getAdminToken() || Account.getToken(),
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
  // ------USERS-------//
  static getUserProfile() {
    return api.get('/users/profile', {
      headers: {
        Authorization: Account.getToken(),
      },
    });
  }

  static userSelfDelete(email) {
    return api.post('/users/deleteSelf', { email });
  }

  static register(data) {
    return api.post('/users/register', data);
  }

  static addresses(data) {
    return api.post('/users/addresses', data);
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

  static confirmToken(data) {
    return api.post('/users/confirm', data);
  }

  // ------PRODUCT-------//
  static getData(data) {
    return api.get(`/products/products?page=${data.page}${data.min ? `&min=${data.min}` : ''}${data.max ? `&max=${data.max}` : ''}${data.filterArr ? `&filter=${data.filterArr}` : ''}${data.searchText ? `&searchText=${data.searchText}` : ''}`, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  }

  static getSingle(id) {
    return api.get(`/products/singleProduct?id=${id}`);
  }

  static likeProduct(productId) {
    return api.post('others/like', { productId });
  }

  static deleteLikeProduct(productId) {
    return api.post('others/likeDelete', { productId });
  }

  // ------ADMIN-------//
  static getUser(page, search) {
    return api.get(`/users/list?page=${page || 1}${search ? `&search=${search}` : ''}`);
  }

  static deleteUser(email, status) {
    return api.post('/users/delete', { email, status });
  }

  static getDataAdmin(data) {
    return api.get(`/products/productsAdmin?page=${data.page}${data.searchText ? `&searchText=${data.searchText}` : ''}`, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  }

  static deleteProduct(id) {
    return api.post('/products/delete', { id });
  }

  static updateProduct(data) {
    return axios({
      headers: {
        Authorization: Account.getAdminToken(),
        'content-type': 'multipart/form-data',
      },
      method: 'post',
      url: `${REACT_APP_API_URL}/products/update`,
      data,
    })
      .then((response) => response)
      .catch((error) => error);
  }

  static createProduct(data) {
    return axios({
      headers: {
        Authorization: Account.getAdminToken(),
        'content-type': 'multipart/form-data',
      },
      method: 'post',
      url: `${REACT_APP_API_URL}/products/createProducts`,
      data,
    })
      .then((response) => response)
      .catch((error) => error);
  }

  static adminLogin(data) {
    return api.post('/admin', data);
  }

  // ------CART-------//
  static addToCart(data) {
    return api.post('/cart/addToCart', {
      productId: data.product.id,
      quantity: data.quantity,
      price: data.price,
    });
  }

  static addLocalCart(data) {
    return api.post('/cart/addToCartLocal', { data });
  }

  static deleteFromCart(productId, cartId) {
    return api.post('/cart/deleteFromCart', {
      productId,
      cartId,
    });
  }

  static getCartItemsList(page) {
    return api.get(`/cart/cartItemList?page=${page || 1}`);
  }

  static getCartItem(page) {
    return api.get(`cart/getCartItem?page=${page || 1}`);
  }

  static updateCart(data) {
    return api.post('cart/updateCount', data);
  }

  // ------BLOCKQUOTE-------//
  static setBlockquote(data) {
    return api.post('/blockquote/blockquote', data);
  }

  static getBlockquoteUser() {
    return api.get('/blockquote/getBlockquoteForUser');
  }

  static getBlockquoteAdmin() {
    return api.get('/blockquote/getBlockquoteForAdmin');
  }

  static deleteBlockquote(id) {
    return api.post('/blockquote/deleteBlockquote', { id });
  }

  static setViewBlockquote(id, ev) {
    return api.post('/blockquote/setBlockquoteView', { id, ev });
  }

  // --------PAYMENT--------//
  static checkoutPayment(data) {
    return api.post('/payment/create-checkout-session', data);
  }

  // ------ORDERS--------//
  static getOrders(data) {
    return api.get('/others/orders', data);
  }

  static getSingleOrders(data) {
    return api.get('/others/getSingleOrder', data);
  }

  static setOrderStatus(data) {
    return api.post('/others/orderStatus', data);
  }
}

export default Api;
