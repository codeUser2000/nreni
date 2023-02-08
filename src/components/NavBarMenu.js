import React from 'react';
import { NavLink } from 'react-router-dom';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function NavBarMenu() {
  return (
    <nav className="nav">
      <ul className="navBlock">
        <li className="navList">
          <NavLink to="/home" className="navLink">Home</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/shop" className="navLink">shop</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/about" className="navLink">about</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/contact" className="navLink">contact</NavLink>
        </li>
        <li className="navList">
          <NavLink to="/cart" className="navLink">
            {' '}
            <CardGiftcardIcon />
          </NavLink>
        </li>
        <li className="navList">
          {' '}
          {sessionStorage.getItem('token') ? (
            <NavLink to="/profile" className="navLink">
              <PermIdentityIcon style={{
                width: 28,
                height: 28,
              }}
              />
            </NavLink>
          )
            : (
              <NavLink to="/login" className="navLink">
                <PermIdentityIcon />
              </NavLink>
            )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMenu;
