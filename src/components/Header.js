import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';

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
                <NavLink to="/login" className="navLink">Login/Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
