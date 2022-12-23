import React from 'react';
import { Link } from 'react-router-dom';

function AboutSilverOldJewelry({ data }) {
  return (
    <div className="aboutBlock">
      <h2 className="aboutTitle">{data.title}</h2>
      <figure className="aboutFigure">
        <img style={{ marginRight: 40 }} src={data.image} alt="" className="aboutImg" />
        <figcaption className="aboutInfo">
          {data.desc}
          {' '}
          {data.link ? <Link className="aboutCleanLink2" to={data.link}>{data.linkTitle}</Link> : null}
        </figcaption>
      </figure>
    </div>

  );
}

export default AboutSilverOldJewelry;
