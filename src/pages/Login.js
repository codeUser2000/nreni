import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';

function Login() {
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
            <form className="loginForm">
              <h2 className="loginFormTitle">Login</h2>
              <input type="email" className="loginFormInput" placeholder=" Type your email" />
              <input type="password" className="loginFormInput" placeholder="Type your password" />
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
