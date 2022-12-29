import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import CartItems from '../components/CartItems';
import Account from '../helpers/Account';
import { getCartItemListRequest } from '../store/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  // const { REACT_APP_API_URL } = process.env;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Account.getToken()) {
      console.log(777);
      // dispatch(getCartItemListRequest(1));
    }
    if (localStorage.getItem('cartItem')) {
      let count = 0;
      JSON.parse(localStorage.getItem('cartItem'))
        .map((c) => {
          count += +c.count * +c.price;
          return true;
        });
      setTotal(count);
    }
  }, []);

  const handleCount = useCallback((operator, product) => {
    console.log(operator, product);
  }, []);
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
                <td>Price</td>
                <td className="">remove</td>
              </tr>
              </thead>
              <tbody className="cartTableTbody">
              <CartItems setTotal={setTotal} handleCount={handleCount}/>
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
                <button type="submit" className="summeryBtn">checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cart;
