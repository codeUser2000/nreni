import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import Account from '../helpers/Account';

function AdminWrapper({ children }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setShow(false);
    } else {
      setShow(true);
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
    if (!Account.getAdminToken()) {
      navigate('/admin');
    }
  }, []);
  return (
    <>
      <AdminHeader show={show} />
      <main className="adminMain">
        <div className="container">
          <div className="AdminMainRow">
            {show ? <AdminMenu /> : null}
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminWrapper;
