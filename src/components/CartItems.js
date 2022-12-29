import React, { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import Account from '../helpers/Account';
import Utils from '../helpers/Utils';
import { getCartItemListRequest, getLocalCartData } from '../store/actions/cart';

function CartItems({ handleCount, setTotal }) {
  const { REACT_APP_API_URL } = process.env;
  // const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.cartData);

  const handleDelete = useCallback((id) => {
    if (Account.getToken()) {
      // dispatch(deleteCartItemRequest(id));
      // dispatch(getCartDataRequest(1));
    } else {
      Utils.deleteFromCart(id);
      let count = 0;
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      JSON.parse(localStorage.getItem('cartItem')).map((c) => {
        count += +c.count * +c.price;
        return true;
      });
      setTotal(count);
      dispatch(getLocalCartData());
    }
  }, []);

  useEffect(() => {
    if (Account.getToken()) {
      dispatch(getCartItemListRequest(1));
    }
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
                onClick={() => handleCount('minus', c)}
              >
                -
              </button>
              <input
                type="text"
                className="cartTableInput"
                value={c.count}
                onChange={() => true}
                readOnly
              />
              <button
                type="button"
                className="cartTableBtnP"
                onClick={() => handleCount('add', c)}
              >
                +
              </button>
            </div>
          </td>
          <td className="cartTablePrice">
            $
            {' '}
            {+c.price * c.count}
            .00
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
