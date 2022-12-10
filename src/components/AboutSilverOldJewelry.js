import React from 'react';
import about3 from '../assets/img/post/about3.jpg';

function AboutSilverOldJewelry() {
  return (
    <div className="aboutBlock">
      <h2 className="aboutTitle">Silver or old jewelry?</h2>
      <figure className="aboutFigure">
        <img style={{ marginRight: 40 }} src={about3} alt="" className="aboutImg" />
        <figcaption className="aboutInfo">
          Your choice of silver jewellery or gold jewellery is primarily down to personal preference, but
          unless you're particularly wealthy, a major deciding factor is cost. It may come as a surprise
          to learn that although silver is of course a precious metal, it's vastly less expensive than
          gold.
          <br />
          <br />
          How much less expensive? At the time of writing silver is about a whopping 75 times less
          expensive
          than gold. This makes gathering a solid gold jewellery collection a very pricey option by
          comparison
          to silver.
          <br />
          <br />
          The reason is primarily that there is considerably more silver in the world than gold. It's
          estimated that 1.4 million tonnes of silver has been mined throughout human history, while only
          173,000 tonnes of gold have been mined.
        </figcaption>
      </figure>
    </div>

  );
}

export default AboutSilverOldJewelry;
