class Account {
  static getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  }

  static getProfile() {
    return localStorage.getItem('profile') || sessionStorage.getItem('profile') || '';
  }

  static setToken(token, remember, profile) {
    if (remember) {
      localStorage.setItem('token', token);
      localStorage.setItem('profile', profile);
    } else {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('profile', profile);
    }
  }
}

export default Account;
