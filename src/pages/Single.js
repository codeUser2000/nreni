import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { useParams } from 'react-router';
import Wrapper from '../components/Wrapper';
import MyCarouselComp from '../components/MyCarouselComp';
import img from '../assets/img/post/banner.jpg';

function Home() {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <Wrapper>
      <Helmet>
        <title>Single</title>
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
