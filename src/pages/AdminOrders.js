import React from 'react';
import AdminWrapper from '../components/AdminWrapper';
import AdminOrder from '../components/AdminOrder';

function AdminOrders() {
  return (
    <AdminWrapper>
      <div className="adminOrders">
        <div className="adminOrdersBlock">
          <p className="adminTitle">Orders</p>
        </div>
        <table className="adminTable">
          <thead className="adminTableThead">
            <tr className="adminTableTheadTitles">
              <td>order id</td>
              <td>order</td>
              <td>customer</td>
              <td>count</td>
              <td>amount</td>
              <td>date</td>
              <td>status order</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            <AdminOrder />
          </tbody>
        </table>
        {/* <Pagination count={+pagination} page={pageNumber} onChange={handleChange} /> */}
      </div>
    </AdminWrapper>

  );
}

export default AdminOrders;
