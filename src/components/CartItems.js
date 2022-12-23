import React, { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItemRequest, getCartDataRequest } from '../store/actions/cart';

function CartItems() {
  const { REACT_APP_API_URL } = process.env;
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.cartData);

  const handleDelete = useCallback((id) => {
    dispatch(deleteCartItemRequest(id));
    dispatch(getCartDataRequest(1));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('cartItem')) {
      setCart(JSON.parse(localStorage.getItem('cartItem')));
    }
  }, []);
  return (
    <>
      {cart.map((c) => (
        <tr key={c.id} className="cartTableTbodyTr">
          <td>
            <div className="cartTableProduct">
              <figure className="cartTableItem">
                <img className="cartTableImg" src={REACT_APP_API_URL + c.avatar} alt="" />
              </figure>
              <div className="cartTableDesk">
                <h4 className="cartTableTitle">{c.title}</h4>
                <p className="cartTableInfo">
                  {c.description}
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
                value={count}
                onChange={() => true}
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
            {c.price}
          </td>
          <td>
            <button type="button" className="cartTableBtnR">
              <DeleteIcon
                onClick={() => handleDelete(c.id)}
              />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CartItems;
