import React from 'react';

function Blockquote({ data }) {
  return (

    <div className="quotesBlock">
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
