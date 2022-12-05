import React, {
  useCallback,
} from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
import _ from 'lodash';
import Wrapper from '../components/Wrapper';
// import Filter from '../components/Filter';
import ShopProduct from '../components/ShopProduct';
import data from '../productData';
import SliderValue from '../components/SliderValue';

function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const min = 100;
  const max = 1900;
  const handleChange = useCallback((val) => {
    query.sliderPrice = val.join('_');
    navigate(`?${qs.stringify(query, { arrayFormat: 'comma', skipEmptyString: true })}`);
  }, [location.search]);
  let finalProduct = data;
  if (query.sliderPrice) {
    const arr = [];
    // eslint-disable-next-line no-shadow
    const [min, max] = query.sliderPrice.split('_');
    const a = finalProduct.filter((f) => f.price >= min && f.price <= max);
    if (!_.isEmpty(a)) {
      arr.push(a);
    }
    finalProduct = arr.flat(1);
  }
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
                    defaultValue={[min, max]}
                    min={min}
                    max={max}
                    value={query?.sliderPrice?.split('_').map((l) => +l)}
                    onChange={(val) => handleChange(val)}
                  />
                  <SliderValue
                    min={min}
                    max={max}
                  />
                </div>
                {/* <Filter /> */}
              </form>
            </aside>
            <section className="shopSection">
              <div className="shopProductsRow">
                {finalProduct.map((l) => {
                  if (l.type === 0) {
                    return (
                      <ShopProduct key={_.uniqueId()} data={l} />
                    );
                  }
                  return true;
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
