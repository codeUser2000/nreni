import React from 'react';
import { Link } from 'react-router-dom';

function MyCarouselComp(props) {
  return (
    <>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <section className="banner">
        <div className="container">
          <div className="bannerRow">
            <div className="bannerDesk">
              <h3 className="bannerSlogan">
                The best
                <b>ARMENIAN</b>
                {' '}
                silver you can get
              </h3>
              <h1 className="bannerTitle">SILVER NRENI</h1>
              <p className="bannerInfo">
                Jewelry is a very personal thing... It should tell a story about the person
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                who's wearing it!
                <br />
                {' '}
                Aesthetic and stylish. The most suitable gifts here for your loved ones
              </p>
              <button type="button" className="bannerBtn">
                <Link className="bannerLink" to="/shop">
                  Shop now
                </Link>
              </button>
            </div>
            <figure className="bannerFigure">
              {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
              <img className="bannerImg" src={props.imgSrc} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyCarouselComp;
