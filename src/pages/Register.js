import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import logo from '../assets/img/logo/logo.png';
import { createUserRequest } from '../store/actions/users';

function Register() {
  const dispatch = useDispatch();
  const [password2, setPassword2] = useState('');
  const [btnRun, setBtnRun] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthYear: '1-1-2005',
  });
  const handleChange = useCallback((key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  }, [formData]);
  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (
      !formData.firstName
      || !formData.password
      || !formData.lastName
      || !formData.email
      || !password2) {
      alert('hy');
      console.log(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName,
        password2,
      );
      return;
    }
    if (!emailReg.test(formData.email)) {
      alert('no email');
    }
    if (!passReg.test(formData.password)) {
      if (!password2) {
        alert('no email');
      }
      if (formData.password !== password2) {
        alert('no equal password');
      }
    }
    console.log(2234423);
    await dispatch(createUserRequest(formData));
  }, [formData, password2]);

  const handleMouseEnter = () => {
    const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!emailReg.test(formData.email)) {
      setBtnRun(!btnRun);
    }
    if (!passReg.test(formData.password)) {
      console.log(112);
      if (!password2) {
        setBtnRun(!btnRun);
      }
      if (formData.password !== password2) {
        console.log(11);
        setBtnRun(!btnRun);
      }
    }
  };
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
            <form onSubmit={handleSubmit} className=" regForm">
              <h2 className=" regFormTitle">Sign Up</h2>
              <input
                type=" text"
                className=" regFormInput"
                placeholder=" Type your first name"
                value={formData.firstName}
                onChange={(ev) => handleChange('firstName', ev.target.value)}
              />
              <input
                type=" text"
                className=" regFormInput"
                placeholder=" Type your last name"
                value={formData.lastName}
                onChange={(ev) => handleChange('lastName', ev.target.value)}
              />
              <input
                type=" email"
                className=" regFormInput"
                placeholder=" Type your email"
                value={formData.email}
                onChange={(ev) => handleChange('email', ev.target.value)}
              />
              <input
                type=" date"
                className=" regFormInput"
                placeholder=" Type your date of birth"
              />
              <input
                type=" password"
                className=" regFormInput"
                placeholder=" Type your password"
                value={formData.password}
                onChange={(ev) => handleChange('password', ev.target.value)}
              />
              <input
                type=" password"
                className=" regFormInput"
                placeholder=" Confirm your password"
                value={password2}
                onChange={(ev) => setPassword2(ev.target.value)}
              />
              <button
                type="submit"
                className={classNames(
                  'regFormBtn',
                  { run: btnRun },
                )}
                onMouseEnter={() => handleMouseEnter()}
              >
                SIGN UP
              </button>
              <Link to="/login" className="regFormLink">Or Login Using</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
