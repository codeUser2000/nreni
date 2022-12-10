import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import NewProduct from '../components/NewProduct';
import newProduct from '../newProduct';
import Blockquote from '../components/Blockquote';
import Assortment from '../components/Assortment';
import MyCarouselComponent from '../components/MyCarouselComponent';

function Home() {
  return (
    <Wrapper>
      <Helmet>
        <title>NRENI</title>
      </Helmet>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <section className="banner">
          <div className="container">
            <div className="carousel-inner">
              <Carousel
                autoplay="true"
                dragging="true"
                pauseOnHover="true"
                wrapAround="true"
              >
                <MyCarouselComp />
                <MyCarouselComponent />
              </Carousel>
            </div>
          </div>
        </section>
        <main className="home">
          <div className="container">
            <Assortment />
            <section className="new">
              <h2 className="newTitle">New jewelery</h2>
              <div className="newJewelryRow">
                {newProduct.map((n) => (
                  <NewProduct key={n.id} data={n} />
                ))}
              </div>
            </section>
            <Blockquote />
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default Home;
