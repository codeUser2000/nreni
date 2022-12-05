import React from 'react';
import 'rc-slider/assets/index.css';
import Wrapper from '../components/Wrapper';
import ShopSection from '../components/ShopSection';
import Filter from '../components/Filter';

function Shop() {
  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
