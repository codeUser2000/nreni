import React, { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import logo from '../assets/img/logo/logo.png';
import login from '../assets/img/site/user.png';
import cart from '../assets/img/site/cart.png';
import us from '../assets/img/site/usa.png';
import russian from '../assets/img/site/russian.png';
import arm from '../assets/img/site/armenia.png';

function Header() {
  const handleLangChange = useCallback((lang) => {
    localStorage.setItem('lang', lang);
  }, []);
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <figure className="logo">
              <Link to="/" className="logoLink">
                <img src={logo} alt="nreni" className="logoImg" />
                <p className="logoName">NRENI</p>
              </Link>
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
                  {sessionStorage.getItem('token')
                    ? (
                      <NavLink to="/profile" className="navLink">
                        <img className="navImg" src={login} alt="" />
                      </NavLink>
                    )
                    : (
                      <NavLink to="/login" className="navLink">
                        <img className="navImg" src={login} alt="" />
                      </NavLink>
                    )}
                </li>
                <li className="navList">
                  <NavLink to="/cart" className="navLink">
                    <img className="navImg" src={cart} alt="" />
                  </NavLink>
                </li>
                <li className="navList">
                  <NavDropdown title="Languages" id="basic-nav-dropdown">
                    <ul className="subMenu">
                      <li className="subList" onClick={() => handleLangChange('us')}>
                        <img className="subLanguageIcons" src={us} alt="" />
                        <p className="subLangName">English</p>
                      </li>
                      <li className="subList" onClick={() => handleLangChange('arm')}>
                        <img className="subLanguageIcons" src={arm} alt="" />
                        <p className="subLangName">Հայերեն</p>
                      </li>
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
