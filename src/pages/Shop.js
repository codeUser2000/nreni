import React from 'react';
import 'rc-slider/assets/index.css';
import Wrapper from '../components/Wrapper';
import ShopSection from '../components/ShopSection';
import Filter from '../components/Filter';
import productData from '../productData';
import Product from '../components/Product';

function Shop() {
  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter />
            <section className="shopSection">
              <div className="shopProductsRow">
                {productData.map((n) => (
                  <Product key={n.id} data={n} />
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
