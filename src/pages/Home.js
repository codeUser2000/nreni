import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import img from '../assets/img/post/banner.jpg';
import ring from '../assets/img/post/ring.jpg';
import chainRing from '../assets/img/post/chainRing.jpg';
import necklace from '../assets/img/post/necklace.jpg';
import nameNecklace from '../assets/img/post/nameNecklace.jpg';
import earring from '../assets/img/post/earring.jpg';
import bracelet from '../assets/img/post/bracelet.jpg';
import NewProduct from '../components/NewProduct';
import newProduct from '../newProduct';

function Home() {
  return (
    <Wrapper>
      <Helmet>
        <title>NRENI</title>
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
                      src={ring}
                      alt=""
                      className="assortmentImg"
                    />
                  </figure>
                </div>
                <div className="assortmentColumnDesk">
                  <p className="assortmentInfo">Rings</p>
                  <figure className="assortmentItem">
                    <img src={chainRing} alt="" className="assortmentImg" />
                  </figure>
                </div>
              </div>
              <div className="assortmentColumn2">
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img
                      style={{ objectPosition: 'bottom' }}
                      src={necklace}
                      alt=""
                      className="assortmentImg"
                    />
                  </figure>
                  <div className="assortmentDesk">
                    <p className="assortmentInfo">Necklaces</p>
                    <button type="button" className="assortmentBtn">
                      <Link to="/shop" className="assortmentLink">Shop now</Link>
                    </button>
                  </div>
                </div>
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={nameNecklace} alt="" className="assortmentImg" />
                  </figure>
                </div>
              </div>
              <div className="assortmentColumn3">
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={earring} alt="" className="assortmentImg" />
                  </figure>
                  <p className="assortmentInfo">
                    Earrings
                  </p>
                </div>
                <div className="assortmentColumnDesk">
                  <figure className="assortmentItem">
                    <img src={bracelet} alt="" className="assortmentImg" />
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
                {newProduct.map((n) => (
                  <NewProduct key={n.id} data={n} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default Home;
