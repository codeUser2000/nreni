import React from 'react';
import { Link } from 'react-router-dom';
import about2 from '../assets/img/post/about2.jpg';

function AboutSterlingSilver() {
  return (
    <div className="aboutBlock">
      <h2 className="aboutTitle">What is sterling silver?</h2>
      <figure className="aboutFigure">
        <figcaption className="aboutInfo">
          You might wonder: is sterling silver real silver? The answer is a definite yes. Sterling silver
          is
          simply an alloyed form of silver which is much more suitable to use in jewellery and other
          metalwork.
          <br />
          <br />
          Fine silver is 99.9% pure silver. In this form the metal is beautiful and suffers from minimal
          tarnish, but it&apos;s generally too soft and malleable for many uses, including making most silver
          jewellery.
          <br />
          <br />
          Instead fine silver is alloyed with copper to create sterling silver, which is 92.5% pure silver
          and
          7.5% copper. This percentage of fine silver is why you will sometimes see sterling silver
          referred
          to as &apos;925 silver&apos; or hallmarked with a 925 stamp.
          <br />
          <br />
          The copper makes the silver harder, more durable and therefore much better to work with and use,
          but
          without compromising on colour. Most silver jewellery that you buy and wear will be sterling
          silver.
          <br />
          <br />
          Can silver jewellery turn black? The answer is also: yes - and it&apos;s to be expected and is easy
          enough to resolve.
          <br />
          <br />
          The copper added to sterling silver will cause it to tarnish more easily, with the metal
          turning
          dark brown or black over time, especially in humid conditions. However, it&apos;s easy to clean and
          beneath the tarnish your sterling silver will still be in great condition: it won&apos;t rust or
          perish
          with normal use.
          <Link to="/clean" className="aboutCleanLink2">
            Click for more information!
          </Link>
        </figcaption>
        <img style={{ marginLeft: 40 }} src={about2} alt="" className="aboutImg" />
      </figure>
    </div>
  );
}

export default AboutSterlingSilver;
