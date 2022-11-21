import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../assets/img/logo/logo.png';
import Api from '../Api';

function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [password2, setPassword2] = useState('');
  const [btnRun, setBtnRun] = useState(false);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!firstName || !password || !lastName || !email || !password2) {
      alert('hy');
      console.log(email, password, firstName, lastName);
      return;
    }
    if (!emailReg.test(email)) {
      alert('no email');
    }
    if (!passReg.test(password)) {
      if (!password2) {
        alert('no email');
      }
      if (password !== password2) {
        alert('no equal password');
      }
    }
    // await Api.register({
    //   email,
    //   password,
    //   lastName,
    //   firstName,
    // });
  }, [email, password, firstName, lastName]);

  const handleMouseEnter = () => {
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!emailReg.test(email)) {
      setBtnRun(!btnRun);
    }
    if (!passReg.test(password)) {
      console.log(112);
      if (!password2) {
        setBtnRun(!btnRun);
      }
      if (password !== password2) {
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
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
              <input
                type=" text"
                className=" regFormInput"
                placeholder=" Type your last name"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
              <input
                type=" email"
                className=" regFormInput"
                placeholder=" Type your email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
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
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
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
