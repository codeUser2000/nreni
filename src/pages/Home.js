import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import NewProduct from '../components/NewProduct';
import Assortment from '../components/Assortment';
import HomeAbout from '../components/HomeAbout';
import MyCarouselComp2 from '../components/MyCarouselComp2';
import { getProductDataRequest } from '../store/actions/product';
import { getBlockquoteDataRequest } from '../store/actions/blockquote';
import Blockquote from '../components/Blockquote';

function Home() {
  const productData = useSelector((state) => state.product.productsData);
  const quote = useSelector((state) => state.blockquote.blockquotesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDataRequest(1));
    dispatch(getBlockquoteDataRequest());
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
                <MyCarouselComp
                  data={'Jewelry is a very personal thing... It should tell a story about the person who\'s wearing it!\n'
                                        + '          We sell aesthetic and stylish jewelry. The most suitable gifts here for your loved ones'}
                />
                <MyCarouselComp2 />
              </Carousel>
            </div>
          </div>
        </section>
        <main className="home">
          <div className="container">
            <Assortment />
            <HomeAbout />
            <section className="new">
              <h2 className="newTitle">New jewelery</h2>
              <p className="newHomeInfo">
                Showcasing our creativity and expert craftsmanship at its
                best.
              </p>
              <div className="newJewelryRow">
                <Carousel
                  dragging="true"
                  pauseOnHover="true"
                  wrapAround="true"
                  slidesToShow={3}
                  cellSpacing={20}
                  defaultControlsConfig={{
                    prevButtonText: <ArrowBackIosNewIcon />,
                    nextButtonText: <ArrowForwardIosIcon />,
                    nextButtonStyle: {
                      color: '#ffece5',
                      borderRadius: '50%',
                      marginRight: -15,
                      backgroundColor: '#c31e39',
                    },
                    prevButtonStyle: {
                      color: '#ffece5',
                      borderRadius: '50%',
                      marginLeft: -15,
                      backgroundColor: '#c31e39',
                    },
                  }}
                >
                  {productData.map((n) => (
                    <NewProduct key={n.id} data={n} />
                  ))}
                </Carousel>
              </div>
            </section>

            <blockquote className="blockquote">
              <h2 className="blockquoteTitle">What Our Client Says</h2>
              <p className="blockquoteInfo">people&apos;s writing their opinion about our work</p>
              {quote.length
                ? (
                  <Carousel
                    autoplay="true"
                    dragging="true"
                    pauseOnHover="true"
                    wrapAround="true"
                    cellSpacing={20}
                  >
                    {quote.map((n) => (
                      <Blockquote key={n.id} data={n} />
                    )) }
                  </Carousel>
                ) : <p className="adminQuotes d-flex justify-content-center">Our quotes will be here soon!</p> }
            </blockquote>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default Home;
