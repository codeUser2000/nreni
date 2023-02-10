import React from 'react';
import { useSelector } from 'react-redux';

function OrderItems() {
  const { REACT_APP_API_URL } = process.env;
  const orders = useSelector((state) => state.others.orderDataUser);
  return (
    <>
      {orders.map((o) => (
        <tr key={o.products.id} className="cartTableTbodyTr">
          <td>
            <div className="cartTableProduct">
              <figure className="cartTableItem">
                <img className="cartTableImg" src={REACT_APP_API_URL + o.products.avatar} alt="" />
              </figure>
              <div className="cartTableDesk">
                <h4 className="cartTableTitle">{o.products.title}</h4>
                <p className="cartTableInfo">
                  {o.products.description}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div className="cartTableProduct">
              {o.quantity}
            </div>
          </td>
          <td>
            <div className="cartTableProduct">
              {o.price}
            </div>
          </td>
          <td>
            <div className="cartTableProduct">
              {o.deliveryStatus}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default OrderItems;
