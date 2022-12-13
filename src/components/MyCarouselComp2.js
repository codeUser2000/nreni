import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/post/banner.jpeg';

function MyCarouselComp2({ data }) {
  return (
    <div className="banner2Row">
      <div className="banner2Desk">
        <p className="banner2Info">
          {data}
        </p>
        <button className="banner2Btn">
          <Link className="banner2Link" to="/shop">
            Shop now
          </Link>
        </button>
      </div>
      <figure className="banner2Figure">
        <img className="banner2Img" src={banner} alt="" />
      </figure>
    </div>
  );
}

export default MyCarouselComp2;
