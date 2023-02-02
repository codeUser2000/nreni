import React, { useCallback, useState, useEffect } from 'react';
import PhoneInput, {} from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getUserProfileRequest, updateUserRequest } from '../store/actions/users';

function AddNewAddresses() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUserData);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthYear: new Date(),
    phone: '',
    country: '',
    city: '',
    street: '',
    postal: '',
  });

  useEffect(() => {
    setForm({
      firstName: user.firstName,
      lastName: user.lastName,
      birthYear: new Date(),
      phone: user.phone,
      country: user.country,
      city: user.city,
      street: user.street,
      postal: user.postal,
    });
  }, [user]);

  const handleChange = useCallback((key, value) => {
    form[key] = value;
    setForm({ ...form });
  }, [form]);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    await dispatch(updateUserRequest(form));
    setForm({
      firstName: '',
      lastName: '',
      birthYear: new Date(),
      phone: '',
      country: '',
      city: '',
      street: '',
      postal: '',
    });
  }, [form]);

  return (
    <div className="addNewAddresses">
      <form className="addressForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            value={form.firstName}
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
            value={form.postal}
            onChange={(ev) => handleChange('postal', ev.target.value)}
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
        <button className="addressBtn" onClick={handleSubmit} type="submit">Edit</button>
      </form>
    </div>
  );
}

export default AddNewAddresses;
