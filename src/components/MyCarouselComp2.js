import React from 'react';
import { Link } from 'react-router-dom';
import banner2 from '../assets/img/post/banner2.jpg';

function MyCarouselComp2() {
  return (
    <div className="bannerRow">
      <div className="banner2Desk">
        <p className="banner2Info">The best ARMENIAN silver you can get</p>
        <p className="bannerDiscounts">
          Holiday discounts
          {' '}
          <span>40%</span>
        </p>
        <button className="bannerBtn">
          <Link className="bannerLink" to="/register">
            join us now
          </Link>
        </button>
      </div>
      <figure className="banner2Figure">
        <img className="banner2Img" src={banner2} alt="" />
      </figure>
    </div>
  );
}

export default MyCarouselComp2;
