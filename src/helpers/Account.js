import Cookies from 'js-cookie';

class Account {
  static getToken() {
    return localStorage.getItem('token') || Cookies.get('token') || '';
  }

  static setToken(token, remember) {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      Cookies.set('token', token);
    }
  }
}

export default Account;
