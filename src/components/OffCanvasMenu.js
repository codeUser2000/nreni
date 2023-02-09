import React from 'react';
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonIcon from '@mui/icons-material/Person';
import DiamondIcon from '@mui/icons-material/Diamond';
import GroupIcon from '@mui/icons-material/Group';
import logo from '../assets/img/logo/logo.png';

function OffCanvasMenu({
  show,
  handleClose,
  handleShow,
}) {
  return (
    <div>
      <Offcanvas className="menuBar" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <figure
              className="logo"
              style={{
                width: 30,
                height: 30,
              }}
            >
              <img src={logo} alt="nreni" className="logoImg" />
              <p className="logoName" style={{ fontSize: 22 }}>NRENI</p>
            </figure>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="offset">
            <li className="navListOffset navList">
              <NavLink to="/home" className="navLink">
                <HomeIcon style={{ marginTop: -5 }} />
                {' '}
                Home
              </NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/shop" className="navLink">
                <ShoppingBagIcon style={{ marginTop: -5 }} />
                {' '}
                shop
              </NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/about" className="navLink">
                <GroupIcon style={{ marginTop: -5 }} />
                {' '}
                about
              </NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/clean" className="navLink">
                <DiamondIcon style={{ marginTop: -5 }} />
                {' '}
                Silver
              </NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/contact" className="navLink">
                <AddIcCallIcon style={{ marginTop: -5 }} />
                {' '}
                contact
              </NavLink>
            </li>
            <li className="navListOffset navList">
              <NavLink to="/cart" className="navLink">
                <CreditCardIcon style={{ marginTop: -5 }} />
                {' '}
                card
              </NavLink>
            </li>
            <li className="navList">
              {sessionStorage.getItem('token')
                ? (
                  <NavLink to="/profile" className="navLink">
                    <PersonIcon style={{ marginTop: -5 }} />
                    {' '}
                    Profile
                  </NavLink>
                )
                : (
                  <NavLink to="/login" className="navLink">
                    <PersonIcon style={{ marginTop: -5 }} />
                    {' '}
                    Profile
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
