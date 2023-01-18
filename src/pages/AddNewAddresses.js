import React, { useCallback, useState } from 'react';
import PhoneInput, {} from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import Wrapper from '../components/Wrapper';

function AddNewAddresses() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthYear: new Date(),
    phone: '',
    country: '',
    city: '',
    street: '',
    post: '',
  });

  const handleChange = useCallback((key, value) => {
    form[key] = value;
    setForm({ ...form });
  }, [form]);
  return (
    <Wrapper>
      <main className="profile">
        <form className="addressForm">
          <label
            htmlFor="firstName"
            className="addressLabel"
          >
            first name
            <input
              value={form.firstName}
              onChange={(ev) => handleChange('firstName', ev.target.value)}
              type="text"
              id="firstName"
              className="addressInput"
            />
          </label>
          <label htmlFor="lastName" className="addressLabel">
            last Name
            <input
              value={form.lastName}
              onChange={(ev) => handleChange('lastName', ev.target.value)}
              type="text"
              id="lastName"
              className="addressInput"
            />
          </label>
          <label htmlFor="country" className="addressLabel">
            Country
            <input
              type="text"
              id="country"
              className="addressInput"
              value={form.country}
              onChange={(ev) => handleChange('country', ev.target.value)}
            />
          </label>
          <label htmlFor="city" className="addressLabel">
            city
            <input
              type="text"
              id="city"
              className="addressInput"
              value={form.city}
              onChange={(ev) => handleChange('city', ev.target.value)}
            />
          </label>
          <label htmlFor="street" className="addressLabel">
            street, apartment etc.
            <input
              type="text"
              id="street"
              className="addressInput"
              value={form.street}
              onChange={(ev) => handleChange('street', ev.target.value)}
            />
          </label>
          <label htmlFor="postal" className="addressLabel">
            postal/Zip code
            <input
              type="text"
              id="postal"
              className="addressInput"
              value={form.post}
              onChange={(ev) => handleChange('post', ev.target.value)}
            />
          </label>
          <label className="addressLabel">
            phone number
            <PhoneInput
              id="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(ev) => handleChange('phone', ev)}
            />
          </label>
          <label className="addressLabel">
            date birthday
            <DatePicker
              selected={form.birthYear}
              onChange={(date) => handleChange('birthYear', date)}
              value={form.birthYear}
            />
          </label>
        </form>
      </main>
    </Wrapper>
  );
}

export default AddNewAddresses;
