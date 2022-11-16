import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';

function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="registrationPage">
        <div className="container">
          <div className="regPage">
            <figure className="registerBanner">
              <figcaption className=" regBannerFigcaption">
                <Link to="/home" className=" regPageLogo">
                  <img src={logo} alt=" nreni" className=" regPageLogoImg" />
                  <p className=" regPageLogoName">NRENI</p>
                </Link>
                <h2 className=" regBannerTitle">
                  Welcome to
                  <span>SILVER NRENI</span>
                  {' '}
                  page
                </h2>
                <p className=" regBannerInfo">Sign up to continue and success</p>
              </figcaption>
            </figure>
            <form action="" className=" regForm">
              <h2 className=" regFormTitle">Sign Up</h2>
              <input type=" text" className=" regFormInput" placeholder=" Type your first name" />
              <input type=" text" className=" regFormInput" placeholder=" Type your last name" />
              <input type=" email" className=" regFormInput" placeholder=" Type your email" />
              <input type=" date" className=" regFormInput" placeholder=" Type your date of birth" />
              <input type=" password" className=" regFormInput" placeholder=" Type your password" />
              <input
                type=" password"
                className=" regFormInput"
                placeholder=" Confirm your password"
              />
              <button type="button" className="regFormBtn">SIGN UP</button>
              <Link to="/login" className="regFormLink">Or Login Using</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
