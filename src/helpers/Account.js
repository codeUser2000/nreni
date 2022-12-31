import { Navigate } from 'react-router';

class Account {
  static getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  }

  static getAdminToken() {
    return localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken') || '';
  }

  static setToken(token, remember) {
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
  }

  static setAdminToken(token, remember) {
    if (remember) {
      localStorage.setItem('adminToken', token);
    } else {
      sessionStorage.setItem('adminToken', token);
    }
  }

  static logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    } else if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      return <Navigate to="/login" replace />;
    }
    return false;
  }

  static logoutAdmin() {
    if (localStorage.getItem('adminToken')) {
      localStorage.removeItem('adminToken');
    } else if (sessionStorage.getItem('adminToken')) {
      sessionStorage.removeItem('adminToken');
      return <Navigate to="/admin" replace />;
    }
    return false;
  }
}

export default Account;
