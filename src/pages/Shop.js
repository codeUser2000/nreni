import React, { useEffect } from 'react';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import ShopSection from '../components/ShopSection';
import Filter from '../components/Filter';
import Product from '../components/Product';
import { getProductDataRequest } from '../store/actions/product';

function Shop() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productsData);
  useEffect(() => {
    dispatch(getProductDataRequest());
  }, []);
  console.log(productData, 7876767);
  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter />
            <section className="shopSection">
              <div className="shopProductsRow">
                {productData.length
                  ? productData.map((n) => (
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
