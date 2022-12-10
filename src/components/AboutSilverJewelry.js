import React from 'react';
import { Link } from 'react-router-dom';
import about1 from '../assets/img/post/about1.jpg';

function AboutSilverJewelry() {
  return (
    <div className="aboutBlock">
      <h2 className="aboutTitle">About silver jewelry</h2>
      <figure className="aboutFigure">
        <div className="aboutClean">
          <h4 className="aboutCleanTitle">CLEANING SILVER JEWELLERY</h4>
          <Link to="/clean" className="aboutCleanLink">
            How to Clean Silver Jewellery: Advice and
            Info
          </Link>
          <figure className="aboutCleanFigure">
            <img src={about1} alt="" className="aboutCleanImg" />
          </figure>
        </div>
        <figcaption className="aboutInfo">
          Science confirms that silver is very useful for human health. People throw silver spoons or
          other household items into the well to enrich the water with useful microelements. Jewelry made
          of this metal increases immunity. Silver cleanses the body and consciousness of a person, making
          him mentally stronger.
          <br />
          <br />
          Silver also has bactericidal properties, which is why it is even used in medicine.
          {' '}
          <br />
          <br />
          Silver jewelry is endowed with energy directed towards the inner world of a person. They reveal
          the depth of feelings and emotions, inspire new thoughts and help fulfill wishes.
          Gold is the opposite. It directs the energy to the outside world and attracts material goods. If
          these two energies cooperate, then a person can neither discover his inner world nor receive
          anything material.
          <br />
          <br />
          In ancient times, wearing jewelry was approached in more detail... Considering the advice...
          they wore the metal that gave joy and happiness.
        </figcaption>
      </figure>
    </div>
  );
}

export default AboutSilverJewelry;
