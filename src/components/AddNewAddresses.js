import React from 'react';
import PhoneInput, {} from 'react-phone-number-input';
import Wrapper from './Wrapper';

function AddNewAddresses() {
  return (
    <Wrapper>
      <main className="profile">
        <form action="" className="addressForm">
          <label htmlFor="firstName" className="addressLabel">
            first name
            <input type="text" id="firstName" className="addressInput" />
          </label>
          <label htmlFor="lastName" className="addressLabel">
            last Name
            <input type="text" id="lastName" className="addressInput" />
          </label>
          <label htmlFor="country" className="addressLabel">
            Country
            <input type="text" id="country" className="addressInput" />
          </label>
          <label htmlFor="city" className="addressLabel">
            city
            <input type="text" id="city" className="addressInput" />
          </label>
          <label htmlFor="street" className="addressLabel">
            street, apartment etc.
            <input type="text" id="street" className="addressInput" />
          </label>
          <label htmlFor="postal" className="addressLabel">
            postal/Zip code
            <input type="text" id="postal" className="addressInput" />
          </label>
          <label htmlFor="phone" className="addressLabel">
            phone number
            <input type="text" id="phone" className="addressInput" />
          </label>
          <label htmlFor="birthday" className="addressLabel">
            date birthday
            <input type="text" id="birthday" className="addressInput" />
          </label>
        </form>
      </main>
    </Wrapper>
  );
}

export default AddNewAddresses;
