import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Blockquote({ data }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="quotesBlock"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
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
