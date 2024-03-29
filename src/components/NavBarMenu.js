import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

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
          <NavLink to="/card" className="navLink">
            {' '}
            <ShoppingCartIcon/>
          </NavLink>
        </li>
        <li className="navList">
          {' '}
          {sessionStorage.getItem('token') ? (
              <NavLink to="/profile" className="navLink">
                <PersonIcon style={{
                  width: 28,
                  height: 28,
                }}
                />
              </NavLink>
            )
            : (
              <NavLink to="/login" className="navLink">
                <PersonIcon/>
              </NavLink>
            )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMenu;
