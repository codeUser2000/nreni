import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import Wrapper from '../components/Wrapper';
import image from '../assets/img/post/shopProduct1.jpg';
import Filter from '../components/Filter';

function Shop() {
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
                {/* TODO range տեսակը ու checked եղած ինփուտները կարմիր գույնով  #c31e39 */}
                <div className="shopBtCategory">
                  <h3 className="shopAsideSubtitle">price</h3>
                  <Slider
                    range
                    allowCross={false}
                    // defaultValue={[2900, 29000]}
                    min={2900}
                    max={29000}
                    // min={min}
                    // max={max}
                    // defaultValue={[min, max]}
                    // value={query?.sliderPrice?.split('_').map(l => +l)}
                    // onChange={(val) => handleChange(val)}
                  />
                  <div className="shopPrices">
                    <div className="shopPriceMin">
                      <span className="shopPriceSpan">$</span>
                      {/* eslint-disable-next-line max-len */}
                      TODO ստեղ ստուգում բդի դնես որ հենց ուզեն ինչ որ string գրեն կարմրի input ու
                      մենակ թիվ թույլ տաս որ գրեն
                      <input type="text" placeholder="0" />
                    </div>
                    <p className="shopPriceTo">To</p>
                    <div className="shopPriceMax">
                      <span className="shopPriceSpan">$</span>
                      {/* eslint-disable-next-line max-len */}
                      TODO ստեղ ստուգում բդի դնես որ հենց ուզեն ինչ որ string գրեն կարմրի input ու
                      մենակ թիվ թույլ տաս որ գրեն
                      <input type="text" placeholder="180.00" />
                    </div>
                  </div>
                </div>
                <Filter />
              </form>
            </aside>
            <section className="shopSection">
              <div className="shopProductsRow">
                <div className="shopProduct">
                  <figure className="shopProductItem">
                    <img src={image} alt="" className="shopProductImg" />
                    <figcaption className="shopProductInfo">
                      <h3 className="shopProductTitle">Ring</h3>
                      <p className="shopProductPrice">$16.00</p>
                      <div className="shopProductLabel">
                        <Link to="/shop/id" className="linkToSinglePage">Buy now</Link>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="shopProduct">
                  <figure className="shopProductItem">
                    <img src={image} alt="" className="shopProductImg" />
                    <figcaption className="shopProductInfo">
                      <h3 className="shopProductTitle">Ring</h3>
                      <p className="shopProductPrice">$16.00</p>
                      <div className="shopProductLabel">
                        <Link to="/id" className="linkToSinglePage">Buy now</Link>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
