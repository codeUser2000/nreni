import React from 'react';
import Wrapper from '../components/Wrapper';
import SterlingSilverTarnish from '../components/SterlingSilverTarnish';
import HowSilverTarnish from '../components/HowSilverTarnish';
import HowCleanSilver from '../components/HowCleanSilver';
import HowNotToCleanSilver from '../components/HowNotToCleanSilver';

function Cleaning() {
  return (
    <Wrapper>
      <main className="aboutCleaning">
        <div className="container">
          <h1 className="aboutCleaningMainTitle">clean silver jewelry</h1>
          <p className="aboutCleaningMainInfo">we answer your question "How to clean blackened silver?"</p>
          <SterlingSilverTarnish />
          <HowSilverTarnish />
          <HowCleanSilver />
          <HowNotToCleanSilver />
        </div>
      </main>
    </Wrapper>
  );
}

export default Cleaning;
