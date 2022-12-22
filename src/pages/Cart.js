import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Wrapper from '../components/Wrapper';
import CartItems from "../components/CartItems";

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
                            <CartItems/>
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
