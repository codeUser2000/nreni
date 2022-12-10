import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import NewProduct from '../components/NewProduct';
import Blockquote from '../components/Blockquote';
import Assortment from '../components/Assortment';
import MyCarouselComp2 from '../components/MyCarouselComp2';
import MyCarouselComp3 from '../components/MyCarouselComp3';

function Home() {
  const productData = useSelector((state) => state.product.productsData);
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
                <MyCarouselComp2 />
                <MyCarouselComp3 />
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
                {productData.map((n, index) => {
                  if (index < 3) {
                    return <NewProduct key={n.id} data={n} />;
                  }
                  return true;
                })}
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
