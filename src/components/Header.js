import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Account from '../helpers/Account';
import { getUserProfileRequest } from '../store/actions/users';
import NavBarMenu from './NavBarMenu';
import OffCanvasMenu from './OffCanvasMenu';
import logo from '../assets/img/logo/logo.png';
import { offCanvasUserData } from '../offCanvasData';

function Header() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [offCanvasShow, setOffCanvasShow] = useState(false);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
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
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <figure className="logo">
          <img src={logo} alt="nreni" className="logoImg" />
          <p className="logoName">NRENI</p>
        </figure>
        {!show ? <NavBarMenu />
          : (
            <OffCanvasMenu
              show={offCanvasShow}
              isAdmin={false}
              data={offCanvasUserData}
              handleClose={() => setOffCanvasShow(false)}
              handleShow={() => setOffCanvasShow(true)}
            />
          )}
      </div>
    </header>
  );
}

export default Header;
