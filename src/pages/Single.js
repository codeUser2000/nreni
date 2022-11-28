import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { useParams } from 'react-router';
import LazyLoad from 'react-lazy-load';
import _ from 'lodash';
import Wrapper from '../components/Wrapper';
import data from '../productData';
import ShopProduct from '../components/ShopProduct';

function Single() {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <Wrapper>
      <Helmet>
        <title>Single</title>
      </Helmet>
      {data.map((l) => {
        console.log(l);
        if (l.type === +params.itemId) {
          return (
            <LazyLoad>
              <ShopProduct key={_.uniqueId()} data={l} />
            </LazyLoad>
          );
        }
      })}
    </Wrapper>
  );
}

export default Single;
