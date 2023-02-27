import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames';
import _ from 'lodash';
import Aos from 'aos';
import { useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
import Wrapper from '../components/Wrapper';
import Api from '../Api';
import Utils from '../helpers/Utils';
import { addToCartRequest, getLocalCartData } from '../store/actions/cart';
import Account from '../helpers/Account';
import { setLikeRequest, deleteLikeRequest, checkoutPaymentRequest } from '../store/actions/others';
import 'aos/dist/aos.css';

function Single() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { REACT_APP_API_URL } = process.env;
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [single, setSingle] = useState({});
  const user = useSelector((state) => state.users.singleUserData);

  useEffect(() => {
    Aos.init();
    (async () => {
      const { data } = await Api.getSingle(params.itemId);
      setSingle(data.product);
      setLike(data.likeCount);
      setShow(data.isLiked);
      // const likeD = await Api.getLike();
    })();
  }, []);

  const handleProductAdd = useCallback(async (data) => {
    if (Account.getToken()) {
      const product = {
        quantity: count,
        price: +data.newPrice * count,
        product: data,
      };
      await dispatch(addToCartRequest(product));
    } else {
      const product = {
        id: new Date(),
        quantity: count,
        price: +data.newPrice * count,
        product: data,
      };
      Utils.setCart(product);
      dispatch(getLocalCartData());
    }
  }, [count, user]);

  const handleProductCountChange = useCallback((operator) => {
    if (operator === 'add' && +count < +single.countProduct) {
      setCount(+count + 1);
    } else if (operator === 'delete' && +count > 1) {
      setCount(+count - 1);
    }
  }, [single, count]);

  const handleFocusOut = useCallback((ev) => {
    if (!ev) {
      setCount(1);
    }
  }, []);

  const handleChange = useCallback((ev) => {
    if (_.isNumber(+ev) || !ev) {
      setCount(ev);
      if (+ev < 0) {
        setCount(1);
      }
      if (+ev > +single.countProduct) {
        setCount(+single.countProduct);
      }
    } else if (_.isString(ev)) {
      setCount(1);
    }
  }, [single]);

  const handleProductLike = useCallback(async () => {
    if (!Account.getToken()) {
      localStorage.setItem('location', location.pathname);
      navigate('/login');
      return;
    }
    if (!show) {
      setLike(+like + 1);
      await dispatch(setLikeRequest(single.id));
    } else {
      setLike(+like - 1);
      await dispatch(deleteLikeRequest(single.id));
    }
    setShow(!show);
  }, [show, like, single]);

  const handleCheckout = useCallback(async () => {
    if (localStorage.getItem('cartItem')) {
      localStorage.setItem('location', location.pathname);
      navigate('/login');
    } else {
      // eslint-disable-next-line max-len
      await dispatch(checkoutPaymentRequest(Utils.setPaymentCartData([{ product: single, quantity: count, price: single.newPrice }])));
    }
  }, [single, count]);

  return (
    <Wrapper>
      <main className="single">
        <div className="container">
          <h1
            className="singleTitle"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            We hope You&apos;ll like it !
          </h1>
          <p
            className="singleMainInfo"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Here some information about product you like!
          </p>
          <div
            className="singlePage"
          >
            <figure className="singleItem">
              <img src={REACT_APP_API_URL + single.avatar} className="singleImg" alt="" />
            </figure>
            <div className="singleInfo">
              <div className="singleCol">
                <div className="singleMain">
                  <h2 className="singleInfoTitle">
                    {single.title}
                  </h2>
                  <div>
                    <span className="productLike" onClick={() => handleProductLike()}>
                      {show
                        ? (
                          <FavoriteIcon
                            style={{
                              width: 30,
                              height: 30,
                              fill: '#c31e39',
                            }}
                          />
                        )
                        : (
                          <HeartBrokenIcon
                            style={{
                              width: 30,
                              height: 30,
                            }}
                          />
                        )}
                    </span>
                    {/* <span>{like}</span> */}
                  </div>
                </div>
                <div className="singlePrices">
                  {+single.discount ? (
                    <p className="singleInfoPrice" style={{ color: '#c31e39' }}>
                      $
                      {single.newPrice}
                    </p>
                  ) : null}
                  <p
                    className={classNames('singleInfoPrice', { 'text-decoration-line-through': +single.discount })}
                  >
                    $
                    {single.oldPrice}
                  </p>
                </div>
                <p className="singleInfoDescription">
                  {single.description}
                </p>
                <div className="singleInfoQuantity">
                  <button
                    disabled={+single.countProduct === 0 || count === 1}
                    type="button"
                    className="singleBtnM"
                    onClick={() => handleProductCountChange('delete')}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    onBlur={(ev) => handleFocusOut(ev.target.value)}
                    className="singleInfoInput"
                    onChange={(ev) => handleChange(ev.target.value)}
                    value={count}
                  />
                  <button
                    disabled={+single.countProduct === 0 || +single.countProduct === count}
                    type="button"
                    onClick={() => handleProductCountChange('add')}
                    className="singleBtnP"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="paymentSingle">
                <button
                  onClick={() => {
                    if (+single.countProduct === 0) {
                      toast.info('This product is not available');
                    } else {
                      handleCheckout().then(() => true).catch((e) => false);
                    }
                  }}
                  type="button"
                  className="singleBuyNow"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  onClick={() => handleProductAdd(single)}
                  className="singleAddCard"
                >
                  <ShoppingCartIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Single;
