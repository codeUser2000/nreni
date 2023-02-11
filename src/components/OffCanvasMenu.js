import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/img/logo/logo.png';

function OffCanvasMenu({
  show,
  handleClose,
  handleShow,
  isAdmin,
  data,
}) {
  return (
    <div>
      <Offcanvas className="menuBar" show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/home" className="headerLogoLink">
              <figure
                className="logo"
              >
                <img src={logo} alt="nreni" className="logoImg" />
                <p className="logoName" style={{ fontSize: 22 }}>NRENI</p>
              </figure>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="offset">
            {data.map((m) => (
              <li key={m.id} className="navListOffset navList">
                <NavLink to={m.link} className="navLink">
                  {m.icon}
                  {' '}
                  {m.title}
                </NavLink>
              </li>
            ))}
            {!isAdmin
              ? (
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
              ) : null}
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
