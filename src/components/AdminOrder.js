import React, { useCallback } from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { setOrderStatusRequest } from '../store/actions/others';

function AdminOrder({ data, setData }) {
  const dispatch = useDispatch();
  const handleOrderModal = useCallback((id) => {
    setData(id);
  }, []);

  const handleOrderSent = useCallback(async (id, status) => {
    await dispatch(setOrderStatusRequest({ id, page: 1, status }));
  }, []);
  return (
    <tr>
      <td>
        {data.id}
      </td>
      <td>
        <button type="button" onClick={() => handleOrderModal(data.id)}>Click to see</button>
      </td>
      <td>
        <div className="adminOrderCustomer">
          <h4 className="orderCustomerName">
            {data.userOrder.firstName}
            {' '}
            {data.userOrder.lastName}
          </h4>
          <p>{data.userOrder.phone}</p>
          <p>{data.userOrder.email}</p>
        </div>
      </td>
      <td>{data.total / 100}</td>
      <td>{moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
      <td>
        <button type="button" onClick={() => handleOrderSent(data.id, data.deliveryStatus)}>{data.deliveryStatus === 'sent' ? 'Unsent' : 'Sent'}</button>
      </td>
    </tr>
  );
}

export default AdminOrder;
