import React, { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Account from '../helpers/Account';
import Utils from '../helpers/Utils';
import { getCartItemListRequest, getLocalCartData } from '../store/actions/cart';

function CartItems({ handleCount, setTotal }) {
  const { REACT_APP_API_URL } = process.env;
  // const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const cartToken = useSelector((state) => state.cart.userCartData);
  const user = useSelector((state) => state.users.singleUserData);

  const handleDelete = useCallback((id) => {
    if (Account.getToken()) {
      // dispatch(deleteCartItemRequest(id));
      // dispatch(getCartDataRequest(1));
    } else {
      Utils.deleteFromCart(id);
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
      dispatch(getLocalCartData());
    }
  }, []);

  useEffect(() => {
    (async () => {
      console.log(user);
      if (Account.getToken()) {
        if (!_.isEmpty(user)) {
          await dispatch(getCartItemListRequest(1, user?.cart?.id));
        }
      } else if (localStorage.getItem('cartItem')) {
        setCart(JSON.parse(localStorage.getItem('cartItem')));
      }
    })();
  }, [user]);
  useEffect(() => {
    if (Account.getToken()) {
      setCart(cartToken);
      setTotal(Utils.totalPrice(cartToken));
    }
  }, [cartToken]);
  return (
    <>
      {cart.map((c) => (
        <tr key={c.id} className="cartTableTbodyTr">
          <td>
            <div className="cartTableProduct">
              <figure className="cartTableItem">
                <img className="cartTableImg" src={REACT_APP_API_URL + c.product.avatar} alt="" />
              </figure>
              <div className="cartTableDesk">
                <h4 className="cartTableTitle">{c.product.title}</h4>
                <p className="cartTableInfo">
                  {c.product.description}
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
                value={c.quantity}
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
            {+c.price * +c.quantity}
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
