import React from 'react';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';

function AdminWrapper({ children }) {
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
