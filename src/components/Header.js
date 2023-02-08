import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Account from '../helpers/Account';
import { getUserProfileRequest } from '../store/actions/users';
import NavBarMenu from './NavBarMenu';

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
      {show ? <NavBarMenu /> : null}

    </header>
  );
}

export default Header;
