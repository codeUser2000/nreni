import React, { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from 'react-router-dom';
import Account from '../helpers/Account';
import Utils from '../helpers/Utils';
import {
  addToCartLocalRequest,
  deleteFromCartRequest,
  getCartItemListRequest,
  getLocalCartData, updateCartRequest,
} from '../store/actions/cart';
import { checkoutPaymentRequest } from '../store/actions/others';

function CartItems({
  setTotal,
  page,
  setPage,
}) {
  const { REACT_APP_API_URL } = process.env;
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartToken = useSelector((state) => state.cart.userCartData);
  const user = useSelector((state) => state.users.singleUserData);

  const handleCheckout = useCallback(async (single) => {
    if (localStorage.getItem('cartItem')) {
      navigate('/login');
    } else {
      // eslint-disable-next-line max-len
      await dispatch(checkoutPaymentRequest(Utils.setPaymentCartData([{ product: single.product, quantity: single.quantity, price: single.price }])));
    }
  }, []);

  const handleCount = useCallback(async (operator, product) => {
    if (Account.getToken()) {
      if (operator === '+' && product.product.countProduct >= product.quantity + 1) {
        await dispatch(updateCartRequest({
          productId: product.product.id,
          count: product.quantity + 1,
          price: product.product.newPrice,
        }));
        await dispatch(getCartItemListRequest(page, user.cart.id));
      } else if (product.quantity > 1 && operator === '-') {
        await dispatch(updateCartRequest({
          productId: product.product.id,
          count: product.quantity - 1,
          price: product.product.newPrice,
        }));
        setPage(page);
        await dispatch(getCartItemListRequest(page, user.cart.id));
      }
    } else {
      const newCart = cart.filter((c) => c.id === product.id);
      Utils.changeCount(cart, newCart[0], operator);
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      if (setTotal) {
        setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
      }
    }
  }, [cart, page]);

  const handleDelete = useCallback(async (id) => {
    if (Account.getToken()) {
      setPage(page);
      await dispatch(deleteFromCartRequest(id));
      await dispatch(getCartItemListRequest(page));
    } else {
      Utils.deleteFromCart(id);
      setCart(JSON.parse(localStorage.getItem('cartItem')));
      if (setTotal) {
        setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
      }
      await dispatch(getLocalCartData());
    }
  }, [page]);

  useEffect(() => {
    (async () => {
      if (Account.getToken()) {
        if (localStorage.getItem('cartItem')) {
          await dispatch(addToCartLocalRequest(JSON.parse(localStorage.getItem('cartItem'))));
        }
        localStorage.removeItem('cartItem');
        setPage(page);
        await dispatch(getCartItemListRequest(page));
      } else if (localStorage.getItem('cartItem')) {
        setCart(JSON.parse(localStorage.getItem('cartItem')));
      }
    })();
  }, [page]);

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
            {+c.product.oldPrice}
          </td>
          <td className="cartTablePrice">
            $
            {' '}
            {+c.product.newPrice}
          </td>
          <td className="cartTablePrice">
            -
            {+c.product.discount}
            %
          </td>
          <td style={{ textAlign: 'center' }}>
            <span className="adminTableBtn">
              <DeleteIcon
                onClick={() => handleDelete(c.id)}
              />
            </span>
          </td>
          <td style={{ textAlign: 'center' }}>
            <button
              onClick={() => handleCheckout(c)}
              className="cardBuySingle"
            >
              <PaidIcon />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CartItems;
