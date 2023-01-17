import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import _ from 'lodash';
import logo from '../assets/img/logo/logo.png';
import { userLoginRequest } from '../store/actions/users';
import Account from '../helpers/Account';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.singleUserData);
  const userStatus = useSelector((state) => state.users.usersDataStatus);
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (Account.getToken() && Account.getToken() !== 'undefined' && !_.isEmpty(user)) {
      navigate('/profile');
    }
    if (userStatus === 'ok') {
      navigate('/profile');
    }
  }, [user, userStatus]);
  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    if (!form.email || !form.password) {
      toast.error('Enter email and password');
      return;
    }
    await dispatch(userLoginRequest(form, remember));
  }, [form, remember]);
  const handleChange = useCallback((key, value) => {
    form[key] = value;
    setForm({ ...form });
  }, [form]);

  return (
    <div className="logIn">
      <div className="container">
        <div className="loginPage">
          <form onSubmit={handleSubmit} className="loginForm">
            <h2 className="loginFormTitle">Login</h2>
            <label htmlFor="email" className="loginFormLabel">
              <input
                id="email"
                type="email"
                className="loginFormInput"
                placeholder=" Type your email"
                value={form.email}
                onChange={(ev) => handleChange('email', ev.target.value)}
              />
            </label>
            <label htmlFor="loginPass" style={{ display: 'flex' }} className="loginFormLabel">
              <input
                id="loginPass"
                type={show ? 'text' : 'password'}
                className="loginFormInput"
                placeholder="Type your password"
                value={form.password}
                onChange={(ev) => handleChange('password', ev.target.value)}
              />
              {show
                ? <RemoveRedEyeIcon fontSize="small" onClick={() => setShow(false)} />
                : <VisibilityOffIcon fontSize="small" onClick={() => setShow(true)} />}
            </label>
            <div className="loginBottom">
              <label htmlFor="remember" className="containerCheck">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span className="checkmark" />
                Remember me
              </label>
              <Link className="forgotPassword" to="/password-reset">Forgot password?</Link>
            </div>
            <button type="submit" className="loginFormBtn">LOGIN</button>
            <Link to="/register" className="loginFormLink">Or sign up Using</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
