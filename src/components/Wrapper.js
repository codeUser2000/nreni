import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import { getLocalCartData } from '../store/actions/cart';

function Wrapper({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocalCartData());
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
