import React from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import img from '../assets/img/post/banner.jpg';

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

      </div>
    </Wrapper>
  );
}

export default Home;
