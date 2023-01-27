import React from 'react';
import LockIcon from '@mui/icons-material/Lock';

function Payment() {
  return (
    <div className="payment">
      <div className="container">
        <div className="paymentPage">
          <form className="paymentForm">
            <h2 className="paymentTitle">
              <LockIcon />
              payment
            </h2>
            <label htmlFor="cartName" className="paymentLabel">
              Cardholder's Name
              <input
                id="cartName"
                type="text"
                className="paymentInput"
                placeholder="Name on Card"
              />
            </label>
            <label htmlFor="cartNum" className="paymentLabel">
              Cart Number
              <input
                id="cartNum"
                type="text"
                className="paymentInput"
                placeholder="━ ━ ━ ━  ━ ━ ━ ━  ━ ━ ━ ━  ━ ━ ━ ━"
              />
            </label>
            <div className="paymentInputs">
              <label htmlFor="expiryDate" className="paymentLabel">
                Expiry Date
                <input
                  id="expiryDate"
                  type="text"
                  className="paymentInput"
                  placeholder="Mm/yyyy"
                />
              </label>
              <label htmlFor="cvv" className="paymentLabel">
                CVV
                <input
                  id="cvv"
                  type="number"
                  className="paymentInput"
                  placeholder="Code"
                />
              </label>
            </div>
            <button type="submit" className="paymentBtn">pay now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
