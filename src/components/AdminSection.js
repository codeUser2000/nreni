import React from 'react';
import AdminUsers from './AdminUsers';
import AdminProduct from './AdminProduct';
import AdminCreateProduct from './AdminCreateProduct';

function AdminSection() {
  return (
    <section className="adminSection">
       {/*<AdminProduct/>*/}
       <AdminUsers />
      {/*<AdminCreateProduct />*/}
    </section>
  );
}

export default AdminSection;
