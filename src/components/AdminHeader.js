import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo/logo.png';
import Account from '../helpers/Account';
import OffCanvasMenu from './OffCanvasMenu';
import { offCanvasAdminData } from '../offCanvasData';

function AdminHeader({ show }) {
  const [offCanvasShow, setOffCanvasShow] = useState(false);
  const handleLogout = useCallback(() => {
    Account.logoutAdmin();
    window.location.reload(false);
  }, []);

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
                <Link to="/admin-product" className="navLink">admin</Link>
              </li>
              <li className="navList">
                <p
                  className="navLink"
                  onClick={handleLogout}
                >
                  logout
                </p>
              </li>
              {!show ? (
                <li className="navList">
                  <OffCanvasMenu
                    show={offCanvasShow}
                    data={offCanvasAdminData}
                    isAdmin
                    handleClose={() => setOffCanvasShow(false)}
                    handleShow={() => setOffCanvasShow(true)}
                  />
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
