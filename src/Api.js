import axios from 'axios';
import Account from './helpers/Account';

const { REACT_APP_API_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: Account.getToken(),
    'Content-Type': 'application/json',
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

  static login(data) {
    // console.log(data);
    return api.post('/users/login', data);
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
}

export default Api;
