import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import AdminWrapper from '../components/AdminWrapper';
import AdminOrder from '../components/AdminOrder';
import { getOrderListAdminRequest } from '../store/actions/others';
import OrderModal from '../components/OrderModal';

function AdminOrders() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const [page, setPage] = useState(1);
  const [id, setId] = useState(0);
  const orderData = useSelector((state) => state.others.orderData);
  const pagination = useSelector((state) => state.others.pagination);
  useEffect(() => {
    (async () => {
      setPage(+query.page || 1);
      await dispatch(getOrderListAdminRequest(query.page || 1));
    })();
  }, [page]);
  const handleChange = useCallback(async (ev, value) => {
    setPage(value);
    query.page = value;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

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
              <td>customer</td>
              <td>amount</td>
              <td>date</td>
              <td>order</td>
              <td>status order</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {orderData.map((c) => (<AdminOrder key={c.id} data={c} setData={setId} />))}
          </tbody>
        </table>
        <Pagination count={+pagination} page={page} onChange={handleChange} />
        {id ? <OrderModal id={id} setId={setId} /> : null}
      </div>
    </AdminWrapper>

  );
}

export default AdminOrders;
