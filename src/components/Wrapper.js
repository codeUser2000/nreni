import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import NavigateBar from "./NavigateBar";

function Wrapper(props) {
  return (
    <div>
      <Header />
      {/* <NavigateBar/> */}
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.children}
      <Footer />
    </div>
  );
}

export default Wrapper;
