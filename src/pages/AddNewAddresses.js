import React, { useCallback, useState, useEffect } from 'react';
import PhoneInput, {} from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { createUsersAddressRequest } from '../store/actions/users';

function AddNewAddresses({ data }) {
  const dispatch = useDispatch();
  // const { REACT_APP_API_URL } = process.env;
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

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    if (!_.isEmpty(data)) {
      console.log('111111');
      // await dispatch(updateUsersAddressRequest(form));
    } else {
      await dispatch(createUsersAddressRequest(form));
    }
    setForm({
      firstName: '',
      lastName: '',
      birthYear: new Date(),
      phone: '',
      country: '',
      city: '',
      street: '',
      post: '',
    });
  }, [form, data]);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      setForm(data);
    }
  }, [data]);

  return (
    <div className="addNewAddresses">
      {!_.isEmpty(data) ? (
        <form className="addressForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <input
              value={form.firstName}
              // value={user.firstName}
              onChange={(ev) => handleChange('firstName', ev.target.value)}
              type="text"
              id="firstName"
              className="addressInput"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="firstName"
              className="addressLabel"
            >
              first name
            </label>
          </div>
          <div className="formGroup">
            <input
              value={form.lastName}
              onChange={(ev) => handleChange('lastName', ev.target.value)}
              type="text"
              id="lastName"
              className="addressInput"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lastName" className="addressLabel">
              last Name
            </label>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="country"
              className="addressInput"
              value={form.country}
              onChange={(ev) => handleChange('country', ev.target.value)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="country" className="addressLabel">
              Country
            </label>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="city"
              className="addressInput"
              value={form.city}
              onChange={(ev) => handleChange('city', ev.target.value)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="city" className="addressLabel">
              city
            </label>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="street"
              className="addressInput"
              value={form.street}
              onChange={(ev) => handleChange('street', ev.target.value)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="street" className="addressLabel">
              street, apartment etc.
            </label>
          </div>
          <div className="formGroup">
            <input
              type="text"
              id="postal"
              className="addressInput"
              value={form.post}
              onChange={(ev) => handleChange('post', ev.target.value)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="postal" className="addressLabel">
              postal/Zip code
            </label>
          </div>
          <div className="formGroup">
            <PhoneInput
              id="phone"
              value={form.phone}
              onChange={(ev) => handleChange('phone', ev)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="addressLabel">
              phone number
            </label>
          </div>
          <div className="formGroup">
            <DatePicker
              selected={form.birthYear}
              onChange={(date) => handleChange('birthYear', date)}
              value={form.birthYear}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="addressLabel">
              date birthday
            </label>
          </div>
          <button className="addressBtn" type="submit">Edit</button>
        </form>
      ) : null}
    </div>
  );
}

export default AddNewAddresses;
