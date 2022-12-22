import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../assets/img/post/bracelet.jpg'

function CartItems() {
  return (
    <tr className="cartTableTbodyTr">
      <td>
        <div className="cartTableProduct">
          <figure className="cartTableItem">
            <img className="cartTableImg" src={img} alt="" />
          </figure>
          <div className="cartTableDesk">
            <h4 className="cartTableTitle">collection</h4>
            <p className="cartTableInfo">
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
        </div>
      </td>
      <td>
        <div className="cartTableQuantity">
          <button type="button" className="cartTableBtnM">-</button>
          <input className="cartTableInput" value="1" type="text" />
          <button type="button" className="cartTableBtnP">+</button>
        </div>
      </td>
      <td className="cartTablePrice">
        $16.00
      </td>
      <td>
        <button type="button" className="cartTableBtnR">
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default CartItems;
