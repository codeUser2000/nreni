import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Wrapper from '../components/Wrapper';
import Api from '../Api';
import Utils from '../helpers/Utils';
import { addToCartRequest, getLocalCartData } from '../store/actions/cart';
import Account from '../helpers/Account';
import { likeProductRequest } from '../store/actions/product';

function Single() {
  const params = useParams();
  const dispatch = useDispatch();
  const { REACT_APP_API_URL } = process.env;
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [single, setSingle] = useState({});
  const user = useSelector((state) => state.users.singleUserData);

  useEffect(() => {
    (async () => {
      const { data } = await Api.getSingle(params.itemId);
      setSingle(data.product);
      setLike(data.product.like);
    })();
  }, []);

  const handleProductAdd = useCallback(async (data) => {
    if (Account.getToken()) {
      const product = {
        quantity: count,
        price: +data.price * count,
        product: data,
      };
      await dispatch(addToCartRequest(product, user.cart.id));
    } else {
      const product = {
        id: new Date(),
        quantity: count,
        price: +data.price * count,
        product: data,
      };
      Utils.setCart(product);
      dispatch(getLocalCartData());
    }
  }, [count, user]);

  const handleProductCountChange = useCallback((operator) => {
    if (operator === 'add' && +count < +single.countProduct) {
      setCount(+count + 1);
    } else if (operator === 'delete' && +count >= 0) {
      setCount(+count - 1);
    }
  }, [single, count]);

  const handelProductLike = useCallback(() => {
    setLike(+like + 1);
    setShow(!show);
  }, [show, like]);

  return (
    <Wrapper>
      <main className="single">
        <div className="container">
          <h1 className="singleTitle">We hope You&apos;ll like it !</h1>
          <div className="singlePage">
            <figure className="singleItem">
              <img src={REACT_APP_API_URL + single.avatar} className="singleImg" alt=""/>
            </figure>
            <div className="singleInfo">
              <div className="singleMain">
                <h2 className="singleInfoTitle">
                  {single.title}
                </h2>
                <span className="productLike">
                  {show
                    ? (
                      <FavoriteIcon
                        style={{
                          width: 30,
                          height: 30,
                          fill: '#c31e39',
                        }}
                        onClick={() => handelProductLike()}
                      />
                    )
                    : (
                      <HeartBrokenIcon
                        style={{
                          width: 30,
                          height: 30,
                        }}
                        onClick={() => handelProductLike()}
                      />
                    )}
                  <span className="productLikeCount">{like}</span>
                </span>
              </div>
              <p className="singleInfoPrice">
                $
                {single.price}
              </p>
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
              <button
                type="button"
                onClick={() => handleProductAdd(single)}
                className="singleInfoBtn"
              >
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
