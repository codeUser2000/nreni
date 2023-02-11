import React, { useCallback } from 'react';
import moment from 'moment/moment';

function AdminOrder({ data, setData }) {
  const handleOrderModal = useCallback((id) => {
    setData(id);
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
        {data.status === 'unsold'
          ? <button type="submit">uncorrected</button>
          : <button type="submit">corrected</button>}
      </td>
    </tr>
  );
}

export default AdminOrder;
