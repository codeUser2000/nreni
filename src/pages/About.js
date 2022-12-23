import React from 'react';
import Wrapper from '../components/Wrapper';
import AboutSilverJewelry from '../components/AboutSilverJewelry';
import AboutSilverOldJewelry from '../components/AboutSilverOldJewelry';
import data from '../aboutData';

function About() {
  return (
    <Wrapper>
      <main className="about">
        <div className="container">
          <h1 className="aboutMainTitle">advice & info</h1>
          <p className="aboutMainInfo">we give you useful information on how to use silver and how to keep it clean</p>
          <AboutSilverJewelry />
          {data.map((d) => (
            <AboutSilverOldJewelry key={d.id} data={d} />
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default About;
