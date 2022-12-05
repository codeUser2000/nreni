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

  static setProfile(profile, remember) {
    if (remember) {
      localStorage.setItem('profile', JSON.stringify(profile));
    } else {
      sessionStorage.setItem('profile', JSON.stringify(profile));
    }
  }
}

export default Account;
