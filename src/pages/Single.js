import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import Api from '../Api';
import Utils from '../helpers/Utils';
import { getLocalCartData } from '../store/actions/cart';

function Single() {
  const params = useParams();
  const dispatch = useDispatch();
  const { REACT_APP_API_URL } = process.env;
  const [count, setCount] = useState(1);
  const [single, setSingle] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await Api.getSingle(params.itemId);
      setSingle(data.product);
    })();
  }, []);
  const handleProductAdd = useCallback((data) => {
    data.count = count;
    Utils.setCart(data);
    dispatch(getLocalCartData());
  }, [count]);

  const handleProductCountChange = useCallback((operator) => {
    if (operator === 'add' && +count < +single.countProduct) {
      setCount(+count + 1);
    } else if (operator === 'delete' && +count >= 0) {
      setCount(+count - 1);
    }
  }, [single, count]);
  return (
    <Wrapper>
      <main className="single">
        <div className="container">
          <h1 className="singleTitle">We hope You&apos;ll like it !</h1>
          <div className="singlePage">
            <figure className="singleItem">
              <img src={REACT_APP_API_URL + single.avatar} className="singleImg" alt="" />
            </figure>
            <div className="singleInfo">
              <h2 className="singleInfoPrice">
                {single.price}
                ֏
              </h2>
              <p className="singleInfoTitle">{single.title}</p>
              <p className="singleInfoDescription">
                {single.description}
              </p>
              <div className="singleInfoQuantity">
                <button
                  type="button"
                  className="singleBtnM"
                  onClick={() => handleProductCountChange('delete')}
                >
                  -
                </button>
                <input
                  type="text"
                  className="singleInfoInput"
                  onChange={() => true}
                  value={count < 1 ? setCount(1) : count}
                />
                <button
                  type="button"
                  onClick={() => handleProductCountChange('add')}
                  className="singleBtnP"
                >
                  +
                </button>
              </div>
              <button type="button" onClick={() => handleProductAdd(single)} className="singleInfoBtn">
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
