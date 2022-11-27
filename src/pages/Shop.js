import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
// import _ from 'lodash';
import Wrapper from '../components/Wrapper';
import Filter from '../components/Filter';
import ShopProduct from '../components/ShopProduct';
import data from '../productData';

function Shop() {
  const location = useLocation();
  const [min, setMin] = useState(223);
  const [max, setMax] = useState(1000);
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  useEffect(() => {
    // if (query.sliderPrice) {
    //   // eslint-disable-next-line no-shadow
    //   const [min, max] = query.sliderPrice.split('_');
    //   setMin(+min);
    //   setMax(+max);
    // }
  }, [location.search]);
  const handleChange = useCallback((value) => {
    query.sliderPrice = value.join('_');
    navigate(`?${qs.stringify(query, { arrayFormat: 'comma', skipEmptyString: true })}`);
    console.log();
  }, [location.search]);
  return (
    <Wrapper>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <div className="shop">
        <section className="shopPageSection">
          <div className="shopPageSectionInfo">
            <h1 className="shopTitle">Sale collection</h1>
            <p className="shopSlogan">
              Next stop,
              <b>SILVER NRENI</b>
              {' '}
              shop:)
            </p>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <aside className="shopAside">
              <h2 className="shopAsideTitle">Filters</h2>
              <form action="">
                <div className="shopBtCategory">
                  <h3 className="shopAsideSubtitle">price</h3>
                  <Slider
                    range
                    allowCross={false}
                    // defaultValue={[2900, 29000]}
                    min={min}
                    max={max}
                    // min={min}
                    // max={max}
                    defaultValue={[min, max]}
                    value={query?.sliderPrice?.split('_').map((l) => +l)}
                    onChange={(val) => handleChange(val)}
                  />
                  <div className="shopPrices">
                    <div className="shopPriceMin">
                      <span className="shopPriceSpan">$</span>
                      {/* eslint-disable-next-line max-len */}
                      <input type="text" placeholder="0" />
                    </div>
                    <p className="shopPriceTo">To</p>
                    <div className="shopPriceMax">
                      <span className="shopPriceSpan">$</span>
                      {/* eslint-disable-next-line max-len */}
                      <input type="text" placeholder="180.00" />
                    </div>
                  </div>
                </div>
                <Filter />
              </form>
            </aside>
            <section className="shopSection">
              <div className="shopProductsRow">
                {data.map((l) => (
                  <ShopProduct data={l} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
