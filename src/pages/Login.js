import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';
import Api from '../Api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    await Api.login({
      email,
      password,
    });
  }, [email, password]);
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="logIn">
        <div className="container">
          <div className="loginPage">
            <figure className="logInBanner">
              <figcaption className="logInBannerFigcaption">
                <Link to="/home" className="loginPageLogo">
                  <img src={logo} alt="nreni" className="loginPageLogoImg" />
                  <p className="loginPageLogoName">NRENI</p>
                </Link>
                <h2 className="loginBannerTitle">
                  Welcome to
                  <span>SILVER NRENI</span>
                  {' '}
                  page
                </h2>
                <p className="loginBannerInfo">Sign in to continue and success</p>
              </figcaption>
            </figure>
            <form className="loginForm" onSubmit={(ev) => handleSubmit(ev)}>
              <h2 className="loginFormTitle">Login</h2>
              <input
                type="email"
                className="loginFormInput"
                placeholder=" Type your email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <input
                type="password"
                className="loginFormInput"
                placeholder="Type your password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <button type="submit" className="loginFormBtn">LOGIN</button>
              <Link to="/register" className="loginFormLink">Or sign up Using</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
