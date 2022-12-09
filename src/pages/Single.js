import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';

function Single() {
  const params = useParams();
  const { REACT_APP_API_URL } = process.env;
  const [count, setCount] = useState(0);
  const [single, setSingle] = useState({});
  const productData = useSelector((state) => state.product.productsData);
  useEffect(() => {
    if (params.itemId) {
      const data = productData.filter((p) => +p.id === +params.itemId);
      setSingle(data[0]);
    }
  }, [params]);
  const handleProductAdd = useCallback(() => {

  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Single</title>
      </Helmet>
      {/* eslint-disable-next-line array-callback-return,consistent-return */}
      <main className="single">
        <div className="container">
          <h1 className="singleTitle">We hope You&apos;ll like it !</h1>
          <div className="singlePage">
            <figure className="singleItem">
              <img src={REACT_APP_API_URL + single.avatar} className="singleImg" alt="" />
            </figure>
            <div className="singleInfo">
              <h2 className="singleInfoTitle">{single.title}</h2>
              <p className="singleInfoPrice">
                $
                {single.price}
              </p>
              <p className="singleInfoPrice">
                {single.description}
              </p>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="sizeLabel" className="singleInfoLabel">Select a size: </label>
              <select id="sizeLabel" className="singleSizeSelect">
                <option>XXS</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <div className="singleInfoQuantity">
                <button type="button" onClick={() => setCount(count - 1)} className="singleBtnM">-</button>
                <input value={count < 1 ? setCount(1) : count} className="singleInfoInput" type="text" />
                <button type="button" onClick={() => setCount(count + 1)} className="singleBtnP">+</button>
              </div>
              <button type="button" onClick={handleProductAdd} className="singleInfoBtn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Single;
