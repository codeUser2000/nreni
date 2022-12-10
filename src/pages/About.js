import React from 'react';
import Wrapper from '../components/Wrapper';
import AboutSilverJewelry from '../components/AboutSilverJewelry';
import AboutSterlingSilver from '../components/AboutSterlingSilver';
import AboutSilverOldJewelry from '../components/AboutSilverOldJewelry';

function About() {
  return (
    <Wrapper>
      <main className="about">
        <div className="container">
          <h1 className="aboutMainTitle">advice & info</h1>
          <AboutSilverJewelry />
          <AboutSterlingSilver />
          <AboutSilverOldJewelry />
        </div>
      </main>
    </Wrapper>
  );
}

export default About;
