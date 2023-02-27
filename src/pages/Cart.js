import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Wrapper from '../components/Wrapper';
import CartItems from '../components/CartItems';
import Utils from '../helpers/Utils';
import { checkoutPaymentRequest } from '../store/actions/others';
import { getCartItemListRequest } from '../store/actions/cart';
import qs from 'query-string';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const cartToken = useSelector((state) => state.cart.userCartData);
  const pagination = useSelector((state) => state.cart.pagination);

  useEffect(() => {
    if (localStorage.getItem('cartItem')) {
      setTotal(Math.round(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem')))));
    }
  }, []);

  const handleCheckout = useCallback(async () => {
    if (localStorage.getItem('cartItem')) {
      localStorage.setItem('location', location.pathname);
      navigate('/login');
    } else {
      await dispatch(checkoutPaymentRequest(Utils.setPaymentCartData(cartToken)));
    }
  }, [cartToken]);

  const handleChange = useCallback(async (ev, value) => {
    setPage(value);
    query.page = value;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  return (
    <Wrapper>
      <div className="cart">
        <div className="container">
          <div className="cartPage">
            <h2 className="cartTitle">shopping card</h2>
            <table
              className="cartTable"
            >
              <thead className="cartTableThead">
              <tr className="cartTableTheadTitles">
                <td>Description</td>
                <td>Quantity</td>
                <td>old price</td>
                <td>new price</td>
                <td>discount</td>
                <td>remove</td>
                <td>action</td>
              </tr>
              </thead>
              <tbody className="cartTableTbody">
              <CartItems page={query.page} setPage={setPage} setTotal={setTotal}/>
              </tbody>
            </table>
            <div
              className="orderSummaryDetails"
            >
              <div className="summery">
                <div className="summeryDesk">
                  <p className="summeryTitle">total</p>
                  <p className="summeryPrice">
                    $
                    {total}
                  </p>
                </div>
                <button type="button" onClick={handleCheckout} className="summeryBtn">
                  checkout
                  {/* <Link to="/payment" className="summeryLink">checkout</Link> */}
                </button>
              </div>
            </div>
            <Pagination count={+pagination} page={page} onChange={handleChange}/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cart;
