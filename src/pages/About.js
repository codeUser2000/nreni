import React, { useEffect } from 'react';
import Aos from 'aos';
import Wrapper from '../components/Wrapper';
import AboutSilverJewelry from '../components/AboutSilverJewelry';
import AboutSilverOldJewelry from '../components/AboutSilverOldJewelry';
import data from '../aboutData';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Wrapper>
      <main className="about">
        <div className="container">
          <h1 className="aboutMainTitle" data-aos="zoom-in-down" data-aos-duration="1500">advice & info</h1>
          <p className="aboutMainInfo" data-aos="zoom-in-down" data-aos-duration="1500">we give you useful information on how to use silver and how to keep it clean</p>
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
