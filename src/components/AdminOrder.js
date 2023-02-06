import React, { useEffect } from 'react';

function AdminOrder({ data }) {
  const { REACT_APP_API_URL } = process.env;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <tr>
      <td>
        {data.id}
      </td>
      <td>
        <button type="button">Click to see</button>
      </td>
      <td>
        <div className="adminOrderCustomer">
          {/*<h4 className="orderCustomerName">*/}
          {/*  {data.carts.user.firstName}*/}
          {/*  {' '}*/}
          {/*  {data.carts.user.lastName}*/}
          {/*</h4>*/}
          {/*<p>{data.carts.user.customerPhone}</p>*/}
          {/*<p>{data.carts.user.customerEmail}</p>*/}
        </div>
      </td>
      <td>
        <p className="adminOrderCount">
          {/*{data.quantity}*/}
        </p>
      </td>
      {/*<td>{data.price}</td>*/}
      {/*<td>{data.createdAt}</td>*/}
      <td>
        {data.status === 'unsold'
          ? <button type="submit">uncorrected</button>
          : <button type="submit">corrected</button>}
      </td>
    </tr>
  );
}

export default AdminOrder;
