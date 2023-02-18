import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Aos from 'aos';
import Wrapper from '../components/Wrapper';
import CartItems from '../components/CartItems';
import Utils from '../helpers/Utils';
import { checkoutPaymentRequest } from '../store/actions/others';
import 'aos/dist/aos.css';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const cartToken = useSelector((state) => state.cart.userCartData);
  const paymentStatus = useSelector((state) => state.others.paymentStatus);

  useEffect(() => {
    Aos.init();
    if (paymentStatus === 'fail') {
      navigate('/profile');
    }
  }, [paymentStatus]);

  useEffect(() => {
    if (localStorage.getItem('cartItem')) {
      setTotal(Math.round(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem')))));
    }
  }, []);

  const handleCheckout = useCallback(async () => {
    if (localStorage.getItem('cartItem')) {
      navigate('/login');
    } else {
      await dispatch(checkoutPaymentRequest(Utils.setPaymentCartData(cartToken)));
    }
  }, [cartToken]);

  return (
    <Wrapper>
      <div className="cart">
        <div className="container">
          <div className="cartPage">
            <h2 className="cartTitle" data-aos="zoom-in-down" data-aos-duration="1500">shopping card</h2>
            <table
              className="cartTable"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <thead className="cartTableThead">
                <tr className="cartTableTheadTitles">
                  <td>Description</td>
                  <td>Quantity</td>
                  <td>old price</td>
                  <td>new price</td>
                  <td>discount</td>
                  <td className="">remove</td>
                </tr>
              </thead>
              <tbody className="cartTableTbody">
                <CartItems setTotal={setTotal} />
              </tbody>
            </table>
            <div
              className="orderSummaryDetails"
              data-aos="fade-up"
              data-aos-duration="2000"
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cart;
