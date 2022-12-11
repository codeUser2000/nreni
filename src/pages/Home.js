import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import NewProduct from '../components/NewProduct';
import Blockquote from '../components/Blockquote';
import Assortment from '../components/Assortment';
import { getBlockquoteDataRequest } from '../store/actions/blockquote';
import { getProductDataRequest } from '../store/actions/product';

function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productsData);
  const quote = useSelector((state) => state.blockquote.blockquotesData);
  useEffect(() => {
    dispatch(getBlockquoteDataRequest());
    dispatch(getProductDataRequest());
  }, []);
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
                <MyCarouselComp data={'Jewelry is a very personal thing... It should tell a story about the person who\'s wearing it!\n'
                + '          We sell aesthetic and stylish jewelry. The most suitable gifts here for your loved ones'}
                />
                <MyCarouselComp data="The best ARMENIAN silver you can get" />
                <MyCarouselComp data="The best ARMENIAN silver you can get" />
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
            <blockquote className="blockquote">
              <h2 className="blockquoteTitle">What Our Client Says</h2>
              <p className="blockquoteInfo">people&apos;s writing their opinion about our work</p>
              <Carousel
                autoplay="true"
                dragging="true"
                pauseOnHover="true"
                wrapAround="true"
              >
                {quote.map((n, index) => {
                  if (index < 3) {
                    return <Blockquote key={n.id} data={n} />;
                  }
                  return true;
                })}
              </Carousel>
            </blockquote>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default Home;
