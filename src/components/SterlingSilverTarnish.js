import React from 'react';

function SterlingSilverTarnish({ data }) {
  return (
    <div className="aboutCleaningBlock">
      <h2 className="aboutCleaningTitle">{data.title}</h2>
      <figure className="aboutCleaningFigure">
        <figcaption className="aboutCleaningInfo">
          {data.desc}
          {data.list
            ? (
              <ul className="aboutCleaningList">
                {data.list.map((l) => (
                  <li>{l}</li>
                ))}
              </ul>
            ) : null}
        </figcaption>
        {data.media.split('.').reverse()[0] === 'jpg' ? <img src={data.media} alt="" className="aboutCleaningImg" />
          : (
            <video muted autoPlay loop className="aboutCleaningVideo">
              <source src={data.media} type="video/mp4" />
            </video>
          )}
      </figure>
    </div>
  );
}

export default SterlingSilverTarnish;
