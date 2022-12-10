import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/post/banner.jpeg'

function MyCarouselComp2() {
  return (
    <div className="bannerRow">
      <figure className="bannerFigure">
        <img className="bannerImg" src={banner} alt="" />
      </figure>
      <div className="bannerDesk">
        <p className="banner2Info">
            The best ARMENIAN silver you can get
        </p>
        <button className="bannerBtn">
          <Link className="bannerLink" to="/contact">
            Shop now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MyCarouselComp2;
