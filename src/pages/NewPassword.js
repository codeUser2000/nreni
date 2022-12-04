import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/img/logo/logo.png';
import { newUserPasswordRequest } from '../store/actions/users';

function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [password2, setPassword2] = useState('');
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
    setEmail(JSON.parse(localStorage.getItem('user')).email);
  }, []);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (password !== password2) {
      toast.error('Passwords are not similar');
      return;
    }
    dispatch(newUserPasswordRequest({ password, email }));
    localStorage.removeItem('user');
    navigate('/login');
  }, [password, password2, email]);

  return (
    <>
      <Helmet>
        <title>New Password</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="row">
            <figure className="logo">
              <Link to="/" className="logoLink">
                <img src={logo} alt="nreni" className="logoImg" />
                <p className="logoName">NRENI</p>
              </Link>
            </figure>
            <p className="pasResetTitle">reset your password</p>
          </div>
        </div>
      </header>
      <div className="resetPas">
        <div className="container">
          <div className="resetPasPage">
            <form onSubmit={handleSubmit} className="resetPasForm">
              <h2 className="resetPasTitle">create new password</h2>
              <hr />
              <p className="resetPasInfo">
                Your new password must be different from previous used passwords.
              </p>
              <label htmlFor="newPass" style={{ display: 'flex' }}>
                <input
                  id="newPass"
                  type={show ? 'text' : 'password'}
                  className="resetPasInput"
                  placeholder="Type your password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                {show
                  ? <RemoveRedEyeIcon onClick={() => setShow(false)} />
                  : <VisibilityOffIcon onClick={() => setShow(true)} />}
              </label>
              <input
                type={show ? 'text' : 'password'}
                onChange={(ev) => setPassword2(ev.target.value)}
                className="resetPasInput"
                placeholder="Confirm password"
                value={password2}
              />
              <button type="submit" className="resetPasBtn">Reset password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
