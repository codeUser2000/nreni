import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import AdminWrapper from '../components/AdminWrapper';
import AdminOrder from '../components/AdminOrder';
import { getCartItemListAdminRequest } from '../store/actions/cart';

function AdminOrders() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cartAdminData = useSelector((state) => state.cart.cartAdminData);
  const pagination = useSelector((state) => state.cart.pagination);
  useEffect(() => {
    (async () => {
      await dispatch(getCartItemListAdminRequest(page));
    })();
  }, [page]);
  const handleChange = useCallback(async (ev, value) => {
    setPage(value);
    await dispatch(getCartItemListAdminRequest(page));
  }, [pagination]);
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
            {cartAdminData.map((c) => (<AdminOrder key={c.id} data={c} />))}
          </tbody>
        </table>
        <Pagination count={+pagination} page={page} onChange={handleChange} />
      </div>
    </AdminWrapper>

  );
}

export default AdminOrders;
