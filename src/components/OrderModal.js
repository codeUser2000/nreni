import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import { useSelector } from 'react-redux';

function OrderModal({ id, setId }) {
  const productData = useSelector((state) => state.others.orderData);
  const { REACT_APP_API_URL } = process.env;
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState('');
  useEffect(() => {
    setData(productData.find((p) => p.id === id).products);
    setCustomer(productData.find((p) => p.id === id).userOrder.email);
  }, [productData]);
  return (
    <Modal
      isOpen={!!id}
      ariaHideApp={false}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: ' 22px 0',
      }}
      >
        <div>
          Customer :
          { customer || ''}
        </div>
        <button type="button" onClick={() => setId(0)}>
          x
        </button>
      </div>
      <table className="adminTable">
        <thead className="adminTableThead">
          <tr className="adminTableTheadTitles">
            <th>Product image</th>
            <th>Product info</th>
            <th>Product count</th>
            <th>Product price</th>
          </tr>
        </thead>
        <tbody className="adminTableTbody">
          {data.map((d) => (
            <tr key={_.uniqueId()}>
              <td>
                <figure className="cartTableItem">
                  <img className="cartTableImg" src={REACT_APP_API_URL + d.products.avatar} alt="" />
                </figure>
              </td>
              <td>
                <p>{d.products.title}</p>
                <p>{d.products.description}</p>
              </td>
              <td>{d.quantity}</td>
              <td>{d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
}

export default OrderModal;
