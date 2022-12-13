import React from 'react';
import AdminMenu from './AdminMenu';
import AdminSection from './AdminSection';

function AdminMain() {
  return (
    <main className="adminMain">
      <div className="container">
        <div className="AdminMainRow">
          <AdminMenu />
          <AdminSection />
        </div>
      </div>
    </main>

  );
}

export default AdminMain;
