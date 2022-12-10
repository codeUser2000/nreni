import React from 'react';

function Blockquote({ data }) {
  return (
    <blockquote className="blockquote">
      <h2 className="blockquoteTitle">What Our Client Says</h2>
      <p className="blockquoteInfo">people&apos;s writing their opinion about our work</p>
      <div className="quotesBlock">
        <h2 className="quoteSymbol">❛❛</h2>
        <p className="quote">
          {/* ❛❛ */}
          {/* {data.text} */}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been
          the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
          {/* ❜❜ */}
        </p>
        <div className="blockquoteBtm">
          <div className="quoteLine" />
          <h3 className="thePerson">
            James Bond
            {/* {data.firstName} */}
            {/* {' '} */}
            {/* {data.lastName} */}
          </h3>
          <div className="quoteLine" />
        </div>
      </div>
    </blockquote>
  );
}

export default Blockquote;
