import React, { useEffect } from 'react';
import _ from 'lodash';
import Aos from 'aos';

function SterlingSilverTarnish({ data }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="aboutCleaningBlock">
      <h2
        className="aboutCleaningTitle"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="bottom-bottom"
      >
        {data.title}
      </h2>
      <figure className="aboutCleaningFigure">
        <figcaption
          className="aboutCleaningInfo"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="bottom-bottom"
        >
          {data.desc}
          {data.list
            ? (
              <ul className="aboutCleaningList">
                {data.list.map((l) => (
                  <li key={_.uniqueId()}>{l}</li>
                ))}
              </ul>
            ) : null}
        </figcaption>
        {data.media.split('.')
          .reverse()[0] === 'jpg' ? (
            <img
              src={data.media}
              alt=""
              className="aboutCleaningImg"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-anchor-placement="bottom-bottom"
            />
          )
          : (
            <video
              muted
              autoPlay
              loop
              className="aboutCleaningVideo"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <source src={data.media} type="video/mp4" />
            </video>
          )}
      </figure>
    </div>
  );
}

export default SterlingSilverTarnish;
