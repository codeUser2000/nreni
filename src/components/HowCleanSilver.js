import React from 'react';
import aboutClean3 from '../assets/img/post/aboutClean3.jpg';

function HowCleanSilver() {
  return (
    <div className="aboutCleaningBlock">
      <h2 className="aboutCleaningTitle">How to clean silver jewelry</h2>
      <figure className="aboutCleaningFigure">
        <figcaption className="aboutCleaningInfo">
          There is more than one way to clean silver jewellery. Your choice of method will depend
          on
          how
          tarnished the piece is, what materials you have on hand and how careful you want to be.
          <br />
          <br />
          If you bought your silver jewellery online, check the manufacturer's care instructions.
          They may
          also sell jewellery cleaning products that are safe for their silver pieces. Check out
          our
          jewellery care and cleaning guide for your Simone Walsh Jewellery pieces.
          <br />
          <br />
          Whichever cleaning method (or combination) you choose, make sure you have at least
          two separate
          gentle cloths on hand: at least one for cleaning and one for drying. The types of
          cloths you
          might use to clean glasses or a mirror are likely to work well (microfibre cloths
          and similar
          are great).
          <br />
          <br />
          Having some good quality absorbent kitchen towels on hand is also helpful as the
          towels will
          easily mop up water from rinsing your jewellery, making it much easier to finish
          drying with the
          soft drying cloth you have set aside.
          <br />
          <br />
          We also recommend having a soft bristled brush to help get into difficult
          areas and to remove
          debris.
        </figcaption>
        <img src={aboutClean3} alt="" className="aboutCleaningImg" />
      </figure>
    </div>

  );
}

export default HowCleanSilver;
