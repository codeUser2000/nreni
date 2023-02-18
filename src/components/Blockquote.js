import React from 'react';
import { useEffect } from '@types/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Blockquote({ data }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="quotesBlock" data-aos="zoom-out" data-aos-duration="2000">
      <h2 className="quoteSymbol">❛❛</h2>
      <p className="quote">
        {data.message}
      </p>
      <div className="blockquoteBtm">
        <div className="quoteLine" />
        <h3 className="thePerson">
          {data.firstName}
          {' '}
          {data.lastName}
        </h3>
        <div className="quoteLine" />
      </div>
    </div>
  );
}

export default Blockquote;
