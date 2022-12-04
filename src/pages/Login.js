import React, {useCallback, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../assets/img/logo/logo.png';
import {userLoginRequest} from '../store/actions/users';

function Login() {
    const dispatch = useDispatch();
    const userDataStatus = useSelector((state) => state.users.usersDataStatus);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const handleSubmit = useCallback(async (ev) => {
        ev.preventDefault();
        if (!form.email || !form.password) {
            toast.error('Enter email and password');
        }
        dispatch(userLoginRequest(form));
    }, [form, userDataStatus]);
    const handleChange = useCallback((key, value) => {
        form[key] = value;
        setForm({...form});
    }, [form]);
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
                                    <img src={logo} alt="nreni" className="loginPageLogoImg"/>
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
                        <form onSubmit={handleSubmit} className="loginForm">
                            <h2 className="loginFormTitle">Login</h2>
                            <input
                                type="email"
                                className="loginFormInput"
                                placeholder="Your email"
                                value={form.email}
                                onChange={(ev) => handleChange('email', ev.target.value)}
                            />
                            <input
                                type="password"
                                className="loginFormInput"
                                placeholder="Your password"
                                value={form.password}
                                onChange={(ev) => handleChange('password', ev.target.value)}
                            />
                            <Link className="forgotPassword" to="/passwordReset">Forgot password?</Link>
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
