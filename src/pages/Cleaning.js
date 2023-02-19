import React, { useEffect } from 'react';
import Aos from 'aos';
import Wrapper from '../components/Wrapper';
import SterlingSilverTarnish from '../components/SterlingSilverTarnish';
import aboutClean from '../aboutClean';
import 'aos/dist/aos.css';

function Cleaning() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Wrapper>
      <main className="aboutCleaning">
        <div className="container">
          <h1
            className="aboutCleaningMainTitle"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            clean silver jewelry
          </h1>
          <p
            className="aboutCleaningMainInfo"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            we answer your question "How to clean blackened
            silver?"
          </p>
          {aboutClean.map((a) => (
            <SterlingSilverTarnish key={a.id} data={a} />
          ))}
        </div>
      </main>
    </Wrapper>
  );
}

export default Cleaning;
