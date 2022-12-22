import React, { useCallback, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import img from '../assets/img/post/bracelet.jpg';
import { deleteCartItemRequest, getCartDataRequest } from '../store/actions/cart';

function CartItems() {
  const [count, setCount] = useState(0);
  const cart = useSelector((state) => state.cart.cartData);

  const handleDelete = useCallback((id) => {
    dispatch(deleteCartItemRequest(id));
    dispatch(getCartDataRequest(1));
  }, []);

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
          <button
            type="button"
            className="cartTableBtnM"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <input
            type="text"
            className="cartTableInput"
            value={count < 1 ? setCount(1) : count}
          />
          <button
            type="button"
            className="cartTableBtnP"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="cartTablePrice">
        $16.00
      </td>
      <td>
        <button type="button" className="cartTableBtnR">
          <DeleteIcon
            onClick={() => handleDelete(data.id)}
          />
        </button>
      </td>
    </tr>
  );
}

export default CartItems;
