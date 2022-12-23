import React from 'react';
import data from '../orderData';

function AdminOrder() {
  return (
    <>
      {data.map((order) => (
        <tr>
          <td>
            {order.orderId}
          </td>
          <td>
            <div className="adminOrder">
              <figure className="adminOrderItem">
                <img src="" alt="" className="adminOrderImg" />
              </figure>
              <div className="adminOrderInfo">
                <p className="adminOrderName">
                  {order.productName}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div className="adminOrderCustomer">
              <h4 className="orderCustomerName">{order.customerName}</h4>
              <p>{order.customerPhone}</p>
              <p>{order.customerEmail}</p>
            </div>
          </td>
          <td>
            <p className="adminOrderCount">
              {order.count}
            </p>
          </td>
          <td>{order.price}</td>
          <td>{order.date}</td>
          <td>
            <button type="submit">uncorrected</button>
            <button type="submit">corrected</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default AdminOrder;
