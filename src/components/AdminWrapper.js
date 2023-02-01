import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';
import Account from '../helpers/Account';

function AdminWrapper({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Account.getAdminToken()) {
      navigate('/admin');
    }
  }, []);
  return (
    <>
      <AdminHeader />
      <main className="adminMain">
        <div className="container">
          <div className="AdminMainRow">
            <AdminMenu />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminWrapper;
