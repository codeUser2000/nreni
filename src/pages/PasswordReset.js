import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import logo from '../assets/img/logo/logo.png';
import { forgetUserPasswordRequest } from '../store/actions/users';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    dispatch(forgetUserPasswordRequest(email));
  }, [email]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="pasResetRow">
            <figure className="logo">
              <Link to="/home" className="logoLink">
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
              <h2 className="resetPasTitle">Forgot your password?</h2>
              <hr />
              <p className="resetPasInfo">
                To find your account enter your email and we&apos;ll
                send you a link to get into your
                account.
              </p>
              <input
                type="email"
                onChange={(ev) => setEmail(ev.target.value)}
                className="resetPasInput"
                placeholder="Type Your Email"
              />
              <button type="submit" className="resetPasBtn">Send instructions</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
