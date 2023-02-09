import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import jwtDecode from 'jwt-decode';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import { createUserRequest } from '../store/actions/users';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password2, setPassword2] = useState('');
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    status: 'pending',
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
      || !password2
    ) {
      toast.error('Please fill all gaps');
      return;
    }
    // if (!isValidPhoneNumber(formData.phone)) {
    //   toast.error('Not valid number');
    //   return;
    // }
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
    if (formData.status === 'active') {
      navigate('/login');
    }
  }, [formData, password2]);
  const handleCallback = useCallback((res) => {
    const userInfo = jwtDecode(res.credential);
    setFormData({
      firstName: userInfo.given_name,
      lastName: userInfo.family_name,
      email: userInfo.email,
      password: '',
      status: 'active',
    });
  }, []);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: '750414407655-rms17ql7o07uflsg8juqvsqakg0ij4rv.apps.googleusercontent.com',
      callback: handleCallback,
    });
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById('signInGoogle'),
      { theme: 'outline', size: 'large' },
    );
  }, []);
  return (
    <>
      <Helmet>
        <body className="red" />
      </Helmet>
      <div className="registrationPage">
        <div className="container">
          <div className="regPage">
            <form onSubmit={handleSubmit} className=" regForm">
              <h2 className=" regFormTitle">Sign Up</h2>
              <label htmlFor="firstName" className="regFormLabel">
                <input
                  type=" text"
                  id="firstName"
                  className=" regFormInput"
                  placeholder="Your First Name"
                  value={formData.firstName}
                  onChange={(ev) => handleChange('firstName', ev.target.value)}
                />
              </label>
              <label htmlFor="lastName" className="regFormLabel">
                <input
                  type=" text"
                  id="lastName"
                  className=" regFormInput"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={(ev) => handleChange('lastName', ev.target.value)}
                />
              </label>
              <label htmlFor="email" className="regFormLabel">
                <input
                  type=" email"
                  id="email"
                  className=" regFormInput"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(ev) => handleChange('email', ev.target.value)}
                />
              </label>
              <label htmlFor="RegPass" style={{ display: 'flex' }} className="regFormLabel">
                <input
                  id="RegPass"
                  type={show ? 'text' : 'password'}
                  className="regFormInput"
                  placeholder="Type Password"
                  value={formData.password}
                  onChange={(ev) => handleChange('password', ev.target.value)}
                />
                {show
                  ? <RemoveRedEyeIcon fontSize="small" onClick={() => setShow(false)} />
                  : <VisibilityOffIcon fontSize="small" onClick={() => setShow(true)} />}
              </label>
              <label htmlFor="confirmPas" className="regFormLabel">
                <input
                  id="confirmPas"
                  type={show ? 'text' : 'password'}
                  className=" regFormInput"
                  placeholder="Confirm Your Password"
                  value={password2}
                  onChange={(ev) => setPassword2(ev.target.value)}
                />
              </label>
              <button
                type="submit"
                className="regFormBtn"
              >
                sign up
              </button>
              <button
                type="submit"
                id="signInGoogle"
              >
                sign up google
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
