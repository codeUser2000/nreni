import React from 'react';
import aboutClean4 from '../assets/img/post/aboutClean4.mp4';

function HowNotToCleanSilver() {
  return (
    <div className="aboutCleaningBlock">
      <h2 className="aboutCleaningTitle">How not to clean silver</h2>
      <figure className="aboutCleaningFigure">
        <figcaption className="aboutCleaningInfo">
          Search online and you'll see all sorts of homemade silver cleaning methods using
          everyday
          ingredients you'll most likely have at home. Most of them are problematic and are really
          not
          recommended by jewellery professionals.
          <br />
          <br />
          If you urgently need to clean your silver jewelry this time, you may find that these
          methods
          will save you a lot of trouble, especially if you are very careful. However, we
          generally do not
          recommend using them if it can be avoided.
          <br />
          <br />
          Some of these methods include:
          <ul className="aboutCleaningList">
            <li>Baking soda paste (too abrasive)</li>
            <li> Toothpaste (ditto)</li>
            <li> Vinegar (too acidic and may damage gemstones)</li>
            <li> Lemon juice (ditto)</li>
            <li>
              {' '}
              Olive oil mixture (leaves a sticky residue that may be difficult to
              remove)
            </li>
            <li> Any combination of the above</li>
          </ul>
        </figcaption>
        <video muted autoPlay loop className="aboutCleaningVideo">
          <source src={aboutClean4} type="video/mp4" />
        </video>
      </figure>
    </div>

  );
}

export default HowNotToCleanSilver;
