import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

class Account {
  static getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  }

  static getAdminToken() {
    return localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken') || '';
  }

  static getProfile() {
    return localStorage.getItem('profile') || sessionStorage.getItem('profile') || '';
  }

  static setTokenAndProfile(token, remember, profile) {
    if (remember) {
      localStorage.setItem('token', token);
      localStorage.setItem('profile', JSON.stringify(profile));
    } else {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('profile', JSON.stringify(profile));
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
      localStorage.removeItem('profile');
    } else if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('profile');
      // eslint-disable-next-line react/react-in-jsx-scope
      return <Navigate to="/login" replace />;
    }
    return false;
  }

  static logoutAdmin() {
    if (localStorage.getItem('adminToken')) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('profile');
    } else if (sessionStorage.getItem('adminToken')) {
      sessionStorage.removeItem('adminToken');
      sessionStorage.removeItem('profile');
      // eslint-disable-next-line react/react-in-jsx-scope
      return <Navigate to="/login" replace />;
    }
    return false;
  }

  static setCart(product) {
    let productData;
    if (JSON.parse(localStorage.getItem('cartItem')) && JSON.parse(localStorage.getItem('cartItem')) !== 'undefined') {
      const existProduct = JSON.parse(localStorage.getItem('cartItem')).filter((c) => +c.id === +product.id);
      if (existProduct.length) {
        const filterData = JSON.parse(localStorage.getItem('cartItem')).filter((c) => +c.id !== +product.id);
        if (existProduct[0].count + product.count > product.countProduct) {
          toast.error('no');
          return;
        }
        product.count = existProduct[0].count + product.count;
        filterData.push(product);
        productData = filterData;
      } else {
        productData = [...JSON.parse(localStorage.getItem('cartItem')), product];
      }
    } else {
      productData = [product];
    }
    localStorage.setItem('cartItem', JSON.stringify(productData));
  }
}

export default Account;
