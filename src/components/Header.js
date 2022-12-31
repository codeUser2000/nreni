import React, { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/img/logo/logo.png';
import russian from '../assets/img/site/russian.png';
import arm from '../assets/img/site/armenia.png';
import us from '../assets/img/site/usa.png';
import Account from '../helpers/Account';
import { getUserProfileRequest } from '../store/actions/users';

function Header() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const cartDataToken = useSelector((state) => state.cart.userCartData);
  const handleLangChange = useCallback((lang) => {
    localStorage.setItem('lang', lang);
  }, []);
  useEffect(() => {
    (async () => {
      if (Account.getToken() && Account.getToken() !== 'undefined') {
        await dispatch(getUserProfileRequest());
      }
    })();
  },[]);
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <figure className="logo">
              <img src={logo} alt="nreni" className="logoImg" />
              <p className="logoName">NRENI</p>
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <ul className="navBlock">
                <li className="navList">
                  <NavLink to="/home" className="navLink">Home</NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/shop" className="navLink">Shop</NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/about" className="navLink">About</NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/contact" className="navLink">Contact</NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/cart" className="navLink">
                    <LocalMallIcon />
                    {cartData.length ? cartData.length : cartDataToken ? cartDataToken.length : 0}
                  </NavLink>
                </li>
                <li className="navList">
                  {sessionStorage.getItem('token')
                    ? (
                      <NavLink to="/profile" className="navLink">
                        <AccountCircleIcon />
                      </NavLink>
                    )
                    : (
                      <NavLink to="/login" className="navLink">
                        <AccountCircleIcon />
                      </NavLink>
                    )}
                </li>

                <li className="navList">
                  <NavDropdown title="Languages" id="basic-nav-dropdown">
                    <ul className="subMenu">
                      {/* eslint-disable-next-line max-len */}
                      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                      <li className="subList" onClick={() => handleLangChange('us')}>
                        <img className="subLanguageIcons" src={us} alt="" />
                        <p className="subLangName">English</p>
                      </li>
                      {/* eslint-disable-next-line max-len */}
                      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                      <li className="subList" onClick={() => handleLangChange('arm')}>
                        <img className="subLanguageIcons" src={arm} alt="" />
                        <p className="subLangName">Հայերեն</p>
                      </li>
                      {/* eslint-disable-next-line max-len */}
                      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                      <li className="subList" onClick={() => handleLangChange('ru')}>
                        <img className="subLanguageIcons" src={russian} alt="" />
                        <p className="subLangName">Русский</p>
                      </li>
                    </ul>
                  </NavDropdown>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
