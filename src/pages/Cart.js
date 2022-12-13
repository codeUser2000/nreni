import React from 'react';
import Wrapper from '../components/Wrapper';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
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
                <tr className="cartTableTbodyTr">
                  <td>
                    <div className="cartTableProduct">
                      <figure className="cartTableItem">
                        <img className="cartTableImg" src="img/post/shopProduct1.jpg" alt="" />
                      </figure>
                      <div className="cartTableDesk">
                        <h4 className="cartTableTitle">collection</h4>
                        <p className="cartTableInfo">
                          Lorem Ipsum is simply dummy text.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cartTableQuantity">
                      <button type="button" className="cartTableBtnM">-</button>
                      <input className="cartTableInput" value="1" type="text" />
                      <button type="button" className="cartTableBtnP">+</button>
                    </div>
                  </td>
                  <td className="cartTablePrice">
                    $16.00
                  </td>
                  <td>
                    <button type="button" className="cartTableBtnR">
                      <DeleteIcon/>
                    </button>
                  </td>
                </tr>
                <tr className="cartTableTbodyTr">
                  <td>
                    <div className="cartTableProduct">
                      <figure className="cartTableItem">
                        <img className="cartTableImg" src="img/post/shopProduct2.jpg" alt="" />
                      </figure>
                      <div className="cartTableDesk">
                        <h4 className="cartTableTitle">ring</h4>
                        <p className="cartTableInfo">
                          Lorem Ipsum is simply dummy text.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="cartTableQuantity">
                      <button type="button" className="cartTableBtnM">-</button>
                      <input className="cartTableInput" value="1" type="text" />
                      <button type="button" className="cartTableBtnP">+</button>
                    </div>
                  </td>
                  <td className="cartTablePrice">
                    $11.00
                  </td>
                  <td>
                    <button type="button" className="cartTableBtnR">
                      <DeleteIcon/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="orderSummaryDetails">
              <div className="summery">
                <div className="summeryDesk">
                  <p className="summeryTitle">total</p>
                  <p className="summeryPrice">$27.00</p>
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
