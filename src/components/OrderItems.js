import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderItems() {
  const { REACT_APP_API_URL } = process.env;
  const orders = useSelector((state) => state.others.orderDataUser);
  useEffect(() => {
    console.log(orders);
  }, []);
  return (
    <>
      {orders.map((o) => (
        <tr key={o.product.id} className="cartTableTbodyTr">
          <td>
            <div className="cartTableProduct">
              <figure className="cartTableItem">
                <img className="cartTableImg" src={REACT_APP_API_URL + o.product.avatar} alt="" />
              </figure>
              <div className="cartTableDesk">
                <h4 className="cartTableTitle">{o.product.title}</h4>
                <p className="cartTableInfo">
                  {o.product.description}
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
