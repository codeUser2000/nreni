import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Offcanvas,
} from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import logo from '../assets/img/logo/logo.png';
import Account from '../helpers/Account';
import { getUserProfileRequest } from '../store/actions/users';

function Header() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [offCanvasShow, setOffCanvasShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 949) {
      setShow(true);
      setOffCanvasShow(true);
    } else {
      setShow(false);
      setOffCanvasShow(false);
    }
  }, []);
  console.log(5678);
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (Account.getToken() && Account.getToken() !== 'undefined') {
        await dispatch(getUserProfileRequest());
      }
    })();
  }, []);

  return (
    <header className="header">
    </header>
  );
}

export default Header;
