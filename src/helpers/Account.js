class Account {
  static getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  }

  static setToken(token, remember) {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }
}

export default Account;
