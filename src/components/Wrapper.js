import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import { getLocalCartData } from '../store/actions/cart';
import { getMenuRequest } from '../store/actions/others';

function Wrapper({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(getLocalCartData());
      await dispatch(getMenuRequest());
    })();
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
