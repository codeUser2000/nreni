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
    return api.post('', data);
  }

  static register(data) {
    console.log(data);
    return api.post('/users/register', data);
  }

  static getCategoryData(category) {
    return api.get(`shop/${category}`);
  }
}

export default Api;
