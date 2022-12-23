import React, { useEffect, useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import Wrapper from '../components/Wrapper';
import CartItems from '../components/CartItems';
import Account from '../helpers/Account';

function Cart() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (Account.getToken()) {
      return;
    }
    if (localStorage.getItem('cartItem')) {
      let count;
      JSON.parse(localStorage.getItem('cartItem')).map((c) => {
        count = c.count * +c.price;
      });
      setTotal(count);
    }
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
                <CartItems />
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
