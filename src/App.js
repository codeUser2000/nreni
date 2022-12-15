import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import Single from './pages/Single';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Confirm from './pages/Confirm';
import Profile from './pages/Profile';
import PasswordReset from './pages/PasswordReset';
import NewPassword from './pages/NewPassword';
import Cleaning from './pages/Cleaning';
import AdminProduct from './pages/AdminProduct';
import AdminUsers from './pages/AdminUsers';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single/:itemId" element={<Single />} />
            <Route path="/about" element={<About />} />
            <Route path="/clean" element={<Cleaning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<NotFound />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/adminProduct" element={<AdminProduct />} />
            <Route path="/adminUsers" element={<AdminUsers />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer closeOnClick hideProgressBar />
      </>
    );
  }
}

export default App;
