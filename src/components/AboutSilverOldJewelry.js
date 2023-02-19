import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function AboutSilverOldJewelry({ data }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="aboutBlock">
      <h2
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="bottom-bottom"
        className="aboutTitle"
      >
        {data.title}
      </h2>
      <figure
        className="aboutFigure"
      >
        <img
          style={{ marginRight: 40 }}
          src={data.image}
          alt=""
          className="aboutImg"
          data-aos="fade-up"
          data-aos-duration="5000"
          data-aos-anchor-placement="bottom-bottom"
        />
        <figcaption
          className="aboutInfo"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-anchor-placement="bottom-bottom"
        >
          {data.desc}
          {' '}
          {data.link ? <Link className="aboutCleanLink2" to={data.link}>{data.linkTitle}</Link> : null}
        </figcaption>
      </figure>
    </div>

  );
}

export default AboutSilverOldJewelry;
