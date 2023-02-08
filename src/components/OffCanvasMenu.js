import React from 'react';
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import logo from '../assets/img/logo/logo.png';

function OffCanvasMenu({ show, handleClose, handleShow }) {
  return (
    <div>
      <Offcanvas className="menuBar" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <figure className="logo">
              <img src={logo} alt="nreni" className="logoImg" />
              <p className="logoName">NRENI</p>
            </figure>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="offset">
            <li className="navListOffset navList">
              <NavLink to="/home" className="navLink">Home</NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/shop" className="navLink">shop</NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/about" className="navLink">about</NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/contact" className="navLink">contact</NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/cart" className="navLink">
                <CardGiftcardIcon />
              </NavLink>
            </li>
            <li className="navList">
              {sessionStorage.getItem('token')
                ? (
                  <NavLink to="/profile" className="navLink">
                    <PermIdentityIcon
                      style={{
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
        </Offcanvas.Body>
      </Offcanvas>
      <button
        type="button"
        onClick={handleShow}
        className="me-2 menuBtn"
      >
        <MenuIcon style={{ fill: '#c31e39' }} />
      </button>
    </div>
  );
}

export default OffCanvasMenu;
