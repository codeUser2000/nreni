import React, { useEffect } from 'react';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import _ from 'lodash';
import Wrapper from '../components/Wrapper';
import ShopSection from '../components/ShopSection';
import Filter from '../components/Filter';
import Product from '../components/Product';
import { getProductDataRequest } from '../store/actions/product';

function Shop() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productsData);
  const location = useLocation();
  let data = [...productData];
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  useEffect(() => {
    dispatch(getProductDataRequest());
  }, []);
  const categoryArr = _.isArray(query.filter) ? query.filter : [query.filter];
  if (!_.isEmpty(_.compact(categoryArr))) {
    data = data.filter((p) => categoryArr.includes(p.categories.type));
  }
  if (query.sliderPrice) {
    const arr = [];
    const [min, max] = query.sliderPrice.split('_');
    const a = data.filter((f) => +f.price >= min && +f.price <= max);
    if (!_.isEmpty(a)) {
      arr.push(a);
    }
    data = arr.flat(1);
  }

  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter />
            <section className="shopSection">
              <div className="shopProductsRow">
                {data.length
                  ? data.map((n) => (
                    <Product key={n.id} data={n} />
                  )) : 'loading...'}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
