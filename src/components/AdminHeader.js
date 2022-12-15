import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';

function AdminHeader() {
  return (
    <header className="adminHeader">
      <div className="container">
        <div className="adminRow">
          <figure className="logo">
            <Link to="/home" className="logoLink">
              <img src={logo} alt="nreni" className="logoImg" />
              <p className="logoName">NRENI</p>
            </Link>
          </figure>
          <nav className="nav">
            <ul className="navBlock">
              <li className="navList">
                <Link to="/admin" className="navLink">admin</Link>
              </li>
              <li className="navList">
                <Link to="/home" className="navLink">logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
