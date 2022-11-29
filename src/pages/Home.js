import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import img from '../assets/img/post/banner.jpg';
import NewProduct from '../components/NewProduct';

function Home() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Carousel
            autoplay="true"
            dragging="true"
            pauseOnHover="true"
            wrapAround="true"
          >
            <MyCarouselComp imgSrc={img} />
            <MyCarouselComp imgSrc={img} />
          </Carousel>
        </div>
        <main className="home">
          <div className="container">
            <div className="assortment">
              <div className="assortmentColumn1">
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img
                      style={{ objectPosition: 'bottom' }}
                      src={img}
                      alt=""
                      className="assortmentImg"
                    />
                  </figure>
                </div>
                <div className="assortmentColumnDesk">
                  <p className="assortmentInfo">Rings</p>
                  <figure className="assortmentItem">
                    <img src={img} alt="" className="assortmentImg" />
                  </figure>
                </div>
              </div>
              <div className="assortmentColumn2">
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img
                      style={{ objectPosition: 'bottom' }}
                      src={img}
                      alt=""
                      className="assortmentImg"
                    />
                  </figure>
                  <div className="assortmentDesk">
                    <p className="assortmentInfo">Necklaces</p>
                    <button type="button" className="assortmentBtn">
                      <Link to="shop.html" className="assortmentLink">Shop now</Link>
                    </button>
                  </div>
                </div>
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={img} alt="" className="assortmentImg" />
                  </figure>
                </div>
              </div>
              <div className="assortmentColumn3">
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={img} alt="" className="assortmentImg" />
                  </figure>
                  <p className="assortmentInfo">
                    Earrings
                  </p>
                </div>
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={img} alt="" className="assortmentImg" />
                  </figure>
                  <p className="assortmentInfo">
                    Bracelets
                  </p>
                </div>
              </div>
            </div>
            <section className="new">
              <h2 className="newTitle">New jewelery</h2>
              <div className="newJewelryRow">
                <NewProduct />
                <NewProduct />
                <NewProduct />
              </div>
            </section>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default Home;
