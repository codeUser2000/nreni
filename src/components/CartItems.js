import React, { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Account from '../helpers/Account';
import Utils from '../helpers/Utils';
import {
  deleteFromCartRequest,
  getCartItemListRequest,
  getLocalCartData, updateCartRequest,
} from '../store/actions/cart';

function CartItems({ setTotal }) {
  const { REACT_APP_API_URL } = process.env;
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const cartToken = useSelector((state) => state.cart.userCartData);
  const user = useSelector((state) => state.users.singleUserData);

  const handleCount = useCallback(async (operator, product) => {
    if (Account.getToken()) {
      if (operator === '+' && product.product.countProduct >= product.quantity + 1) {
        await dispatch(updateCartRequest({
          cartId: product.cartId,
          productId: product.product.id,
          count: product.quantity + 1,
        }));
        await dispatch(getCartItemListRequest(1, user.cart.id));
      } else if (product.quantity > 1 && operator === '-') {
        await dispatch(updateCartRequest({
          cartId: product.cartId,
          productId: product.product.id,
          count: product.quantity - 1,
        }));
        await dispatch(getCartItemListRequest(1, user.cart.id));
      }
    } else {
      const newCart = cart.filter((c) => c.id === product.id);
      Utils.changeCount(cart, newCart[0], operator);
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      if (setTotal) {
        setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
      }
    }
  }, [cart]);

  const handleDelete = useCallback(async (id) => {
    if (Account.getToken()) {
      await dispatch(deleteFromCartRequest(id, user.cart.id));
      await dispatch(getCartItemListRequest(1, user.cart.id));
    } else {
      Utils.deleteFromCart(id);
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      if (setTotal) {
        setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
      }
      await dispatch(getLocalCartData());
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      if (Account.getToken()) {
        if (!_.isEmpty(user)) {
          await dispatch(getCartItemListRequest(1, user.cart.id));
        }
      } else if (localStorage.getItem('cartItem')) {
        setCart(JSON.parse(localStorage.getItem('cartItem')));
      }
    })();
  }, [user]);

  useEffect(() => {
    if (Account.getToken()) {
      setCart(cartToken);
      if (setTotal) {
        setTotal(Utils.totalPrice(cartToken));
      }
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
                onClick={() => handleCount('-', c)}
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
                onClick={() => handleCount('+', c)}
              >
                +
              </button>
            </div>
          </td>
          <td className="cartTablePrice">
            $
            {' '}
            {+c.price}
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
