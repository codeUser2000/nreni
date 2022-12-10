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
