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
import Utils from '../helpers/Utils';
import { getMenuRequest } from '../store/actions/others';
// import { getCartItemListRequest } from '../store/actions/cart';

function Header() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.others.menuData);
  const handleLangChange = useCallback(async (lang) => {
    localStorage.setItem('lang', lang);
    await dispatch(getMenuRequest());
  }, []);
  useEffect(() => {
    (async () => {
      if (Account.getToken() && Account.getToken() !== 'undefined') {
        await dispatch(getUserProfileRequest());
        // await dispatch(getCartItemListRequest(1, 1));
      }
    })();
  }, []);
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
                {menu.length ? menu.map((m) => (
                  <li key={m.id} className="navList">
                    <NavLink to={m.link} className="navLink">{Utils.translation(m)}</NavLink>
                  </li>
                )) : null}
                <li className="navList">
                  <NavLink to="/cart" className="navLink">
                    <LocalMallIcon />
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
