import React, { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/img/logo/logo.png';
import Account from '../helpers/Account';
import { getUserProfileRequest } from '../store/actions/users';

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Account.getToken() && Account.getToken() !== 'undefined') {
        await dispatch(getUserProfileRequest());
        // await dispatch(getCartItemListRequest(1, 1));
      }
    })();
  }, []);

  const handleChange = useCallback(async (ev) => {
    console.log(ev);
  }, []);

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <figure className="logo">
              <img src={logo} alt="nreni" className="logoImg"/>
              <p className="logoName">NRENI</p>
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
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
                    <CardGiftcardIcon/>
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
                        <PermIdentityIcon/>
                      </NavLink>
                    )}
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
