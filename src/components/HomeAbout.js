import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import homeAbout from '../assets/img/post/homeAbout.jpg';
import 'aos/dist/aos.css';

function HomeAbout() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="homeAbout">
      <figure
        className="homeAboutItem"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <img className="homeAboutImg" src={homeAbout} alt="" />
      </figure>
      <div
        className="homeAboutDesk"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <h2 className="homeAboutTitle">What we do?</h2>
        <p className="homeAboutInfo">
          <b>Nreni</b>
          {' '}
          has been working as an online store since 2020. In 2 years, we managed to acquire
          hundreds of
          customers and trust.
          <br />
          {' '}
          We sell it at convenient and
          affordable prices. We give
          you the opportunity to use almost all products.
          <br />
          {' '}
          We also offer you a very easy way to
          receive the
          jewelry through "Hay-Post". We carry out postal delivery both throughout the territory of
          Armenia and outside the borders of Armenia.
          <br />
          <Link to="/about" className="homeAboutLink">See more About Us.</Link>
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;
