import React from 'react';
import aboutClean1 from '../assets/img/post/aboutClean1.jpg';

function SterlingSilverTarnish() {
  return (
    <div className="aboutCleaningBlock">
      <h2 className="aboutCleaningTitle">Sterling silver tarnish</h2>
      <figure className="aboutCleaningFigure">
        <figcaption className="aboutCleaningInfo">
          Tarnishing is a natural process which is caused by oxygen and moisture coming into contact
          with
          various types of metal. If your once shiny metal has turned dull and dark or even looks like
          it
          has dark stains, this is likely to be the reason why.
          <br />
          <br />
          Understanding tarnish is key to cleaning your jewellery. All precious metals can tarnish
          to some
          degree. Platinum and pure gold are the most tarnish-resistant metals and will show very
          minimal
          (if any) tarnish over many years.
          <br />
          <br />
          By contrast, sterling silver jewellery will tarnish relatively easily, meaning it
          will turn a
          brown, grey or black colour over time. This is a normal process.
          <br />
          <br />
          You may have read that pure or fine silver won&apos;t tarnish, but that isn’t true:
          it does, just
          more slowly and in a less noticeable way than sterling silver. Pure silver can
          be cleaned in the
          same way as sterling silver.
          <br />
          <br />
          The reason sterling silver tarnishes more easily is because it is an alloy
          of pure silver with
          copper. This has the benefit of making the metal harder and much more
          suitable for making
          jewellery than pure silver, which is too soft for many uses. The downside is
          that the small
          amount of copper content will tarnish more noticeably over time.
        </figcaption>
        <img src={aboutClean1} alt="" className="aboutCleaningImg" />
      </figure>
    </div>
  );
}

export default SterlingSilverTarnish;
