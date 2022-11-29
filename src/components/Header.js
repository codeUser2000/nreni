import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';
import login from '../assets/img/site/user.png';
import cart from '../assets/img/site/cart.png';
import us from '../assets/img/site/usa.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <figure className="logo">
            <Link to="index.html" className="logoLink">
              <img src={logo} alt="nreni" className="logoImg" />
              <p className="logoName">NRENI</p>
            </Link>
          </figure>
          <nav className="nav">
            <ul className="navBlock">
              <li className="navList">
                <NavLink to="/" className="navLink">Home</NavLink>
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
                <NavLink to="/login" className="navLink">
                  <img className="navImg" src={login} alt="" />
                </NavLink>
              </li>
              <li className="navList">
                <NavLink to="/cart" className="navLink">
                  <img className="navImg" src={cart} alt="" />
                </NavLink>
              </li>
              <li className="navList">
                <Link to="/" className="navLink">
                  <img className="languageIcons" src={us} alt="" />
                </Link>
                <ul className="subMenu">
                  <li className="subList">
                    <Link to="/" className="subLink">
                      <img className="subLanguageIcons" src={us} alt="" />
                      <p className="subLangName">English</p>
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="/" className="subLink">
                      <img className="subLanguageIcons" src={us} alt="" />
                      <p className="subLangName">Հայերեն</p>
                    </Link>
                  </li>
                  <li className="subList">
                    <Link to="/" className="subLink">
                      <img className="subLanguageIcons" src={us} alt="" />
                      <p className="subLangName">Русский</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
