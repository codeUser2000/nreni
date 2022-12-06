import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import logo from '../assets/img/logo/logo.png';
import { createUserRequest } from '../store/actions/users';

function Register() {
  const dispatch = useDispatch();
  const [password2, setPassword2] = useState('');
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthYear: new Date(),
    phone: '',
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
            || !formData.birthYear
            || !password2
            || !formData.phone) {
      toast.error('Please fill all gaps');
      return;
    }
    if (!isValidPhoneNumber(formData.phone)) {
      toast.error('Not valid number');
      return;
    }
    if (!emailReg.test(formData.email)) {
      toast.error('Please enter valid email');
      return;
    }
    if (!passReg.test(formData.password)) {
      if (!password2) {
        toast.error('Please enter password2');
        return;
      }
      if (formData.password !== password2) {
        toast.error('Passwords are not equal');
        return;
      }
    }
    await dispatch(createUserRequest(formData));
  }, [formData, password2]);
  return (
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
              placeholder="Your first name"
              value={formData.firstName}
              onChange={(ev) => handleChange('firstName', ev.target.value)}
            />
            <input
              type=" text"
              className=" regFormInput"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={(ev) => handleChange('lastName', ev.target.value)}
            />
            <input
              type=" email"
              className=" regFormInput"
              placeholder="Your email"
              value={formData.email}
              onChange={(ev) => handleChange('email', ev.target.value)}
            />
            <PhoneInput
              international
              value={formData.phone}
              onChange={(ev) => handleChange('phone', ev)}
            />
            <DatePicker
              className=" regFormInput"
              selected={formData.birthYear}
              dateFormat="yyyy/dd/MM"
              onChange={(ev) => handleChange('birthYear', ev)}
            />
            <label htmlFor="RegPass" style={{ display: 'flex' }}>
              <input
                id="RegPass"
                type={show ? 'text' : 'password'}
                className="regFormInput"
                placeholder="Type your password"
                value={formData.password}
                onChange={(ev) => handleChange('password', ev.target.value)}
              />
              {show
                ? <RemoveRedEyeIcon fontSize="small" onClick={() => setShow(false)} />
                : <VisibilityOffIcon fontSize="small" onClick={() => setShow(true)} />}
            </label>
            <input
              type={show ? 'text' : 'password'}
              className=" regFormInput"
              placeholder="Confirm Your password"
              value={password2}
              onChange={(ev) => setPassword2(ev.target.value)}
            />

            <button
              type="submit"
              className="regFormBtn"
            >
              SIGN UP
            </button>
            <Link to="/login" className="regFormLink">Or Login Using</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
