import React from 'react';
import aboutClean2 from '../assets/img/post/aboutClean2.mp4';

function HowSilverTarnish() {
  return (
    <div className="aboutCleaningBlock">
      <h2 className="aboutCleaningTitle">How does silver tarnish</h2>
      <figure className="aboutCleaningFigure">
        <figcaption className="aboutCleaningInfo">
          Tarnish appearing on your silver jewellery is normal. Even the best silver jewellery
          tarnishes,
          so don&apos;t assume the problem is related to the quality of your jewellery or it not being
          made
          of
          real silver. If anything, tarnish indicates that it really is silver!
          <br />
          <br />
          When silver is exposed to gases in the air - especially sulphur - it discolours and
          darkens as
          it reacts with the gas to form a layer of tarnish on the surface. A similar process can
          occur
          when silver is exposed to an array of other chemicals.
          <br />
          <br />
          Many things in your everyday life can cause your silver to tarnish. These include:
          <br />
          <br />
          <ul className="aboutCleaningList">
            <li>Hand creams</li>
            <li>Perfumes</li>
            <li>Soaps</li>
            <li>Makeup</li>
            <li> Chlorine from swimming pools or cleaning chemicals</li>
            <li> The PH of your skin</li>
            <li>The air around you, especially if it&apos;s humid</li>
          </ul>
          <br />
          <br />
          Silver tarnish is almost impossible to avoid, but there are a lot of factors
          that can make it
          more or less obvious and happen more or less quickly. The good news is that
          you can make a big
          difference to how bad the tarnish gets and you can clean your silver to
          bring it back to its
          sparkling best.
        </figcaption>
        <video muted autoPlay loop className="aboutCleaningVideo">
          <source src={aboutClean2} type="video/mp4" />
        </video>
      </figure>
    </div>
  );
}

export default HowSilverTarnish;
