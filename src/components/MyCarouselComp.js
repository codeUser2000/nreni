import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/post/banner.jpeg';

function MyCarouselComp({ data }) {
  return (
    <div className="bannerRow">
      <figure className="bannerFigure">
        <img className="bannerImg" src={banner} alt="" />
      </figure>
      <div className="bannerDesk">
        <h1 className="bannerTitle">SILVER NRENI</h1>
        <p className="bannerInfo">
          {data}
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
