import React from 'react';
import Wrapper from '../components/Wrapper';
import SterlingSilverTarnish from '../components/SterlingSilverTarnish';
import aboutClean from '../aboutClean';

function Cleaning() {
  return (
    <Wrapper>
      <main className="aboutCleaning">
        <div className="container">
          <h1 className="aboutCleaningMainTitle">clean silver jewelry</h1>
          <p className="aboutCleaningMainInfo">we answer your question "How to clean blackened silver?"</p>
          {aboutClean.map((a) => (
            <SterlingSilverTarnish key={a.id} data={a} />
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default Cleaning;
