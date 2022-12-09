import React from 'react';
import { Link } from 'react-router-dom';

function MyCarouselComp(props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="bannerRow">
          <div className="bannerDesk">
            <h1 className="bannerTitle">SILVER NRENI</h1>
            <h3 className="bannerSlogan">
              The best
              {' '}
              <b>ARMENIAN</b>
              {' '}
              silver you can get
            </h3>
            <button type="button" className="bannerBtn">
              <Link className="bannerLink" to="/shop">
                Shop now
              </Link>
            </button>
          </div>
          <figure className="bannerFigure">
            <img className="bannerImg" src={props.imgSrc} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default MyCarouselComp;

// <p className="bannerInfo">
//   Jewelry is a very personal thing... It should tell a story about the person
//   who's wearing it!
//   <br />
//   {' '}
//   Aesthetic and stylish. The most suitable gifts here for your loved ones
// </p>
