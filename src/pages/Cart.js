import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import CartItems from '../components/CartItems';
import Utils from '../helpers/Utils';
import { checkoutPaymentRequest } from '../store/actions/others';

function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cartToken = useSelector((state) => state.cart.userCartData);

  useEffect(() => {
    if (localStorage.getItem('cartItem')) {
      console.log(localStorage.getItem('cartItem'));
      setTotal(Utils.totalPrice(JSON.parse(localStorage.getItem('cartItem'))));
    }
  }, []);

  const handleCheckout = useCallback(async () => {
    if (localStorage.getItem('cartItem')) {
      console.log(localStorage.getItem('cartItem').length);
    } else {
      await dispatch(checkoutPaymentRequest(cartToken));
    }
  }, [cartToken]);

  return (
    <Wrapper>
      <div className="cart">
        <div className="container">
          <div className="cartPage">
            <h2 className="cartTitle">shopping cart</h2>
            <table className="cartTable">
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
            <div className="orderSummaryDetails">
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
