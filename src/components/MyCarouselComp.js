import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/post/banner.jpeg';

function MyCarouselComp() {
  return (
    <div className="bannerRow">
      <figure className="bannerFigure">
        <img className="bannerImg" src={banner} alt="" />
      </figure>
      <div className="bannerDesk">
        <h1 className="bannerTitle">SILVER NRENI</h1>
        <p className="bannerInfo">
          Jewelry is a very personal thing... It should tell a story about the person who's wearing it!
          We sell aesthetic and stylish jewelry. The most suitable gifts here for your loved ones
        </p>
        <button className="bannerBtn">
          <Link className="bannerLink" to="/contact">
            contact us
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MyCarouselComp;
