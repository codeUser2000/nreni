import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Aos from 'aos';
import { getProductDataRequest } from '../store/actions/product';
import { getBlockquoteDataRequest } from '../store/actions/blockquote';
import ring from '../assets/img/post/ring.jpg';
import chainRing from '../assets/img/post/chainRing.jpg';
import necklace from '../assets/img/post/necklace.jpg';
import nameNecklace from '../assets/img/post/nameNecklace.jpg';
import earring from '../assets/img/post/earring.jpg';
import bracelet from '../assets/img/post/bracelet.jpg';
import 'aos/dist/aos.css';

function Assortment() {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init();
    (async () => {
      await dispatch(getProductDataRequest(1));
      await dispatch(getBlockquoteDataRequest());
    })();
  }, []);
  return (
    <div
      className="assortment"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="assortmentColumn1">
        <div className="assortmentColumnDesk">
          <figure className="assortmentItem">
            <img
              style={{ objectPosition: 'bottom' }}
              src={ring}
              alt=""
              className="assortmentImg"
            />
          </figure>
        </div>
        <div className="assortmentColumnDesk">
          <p className="assortmentInfo">
            ring
          </p>
          <figure className="assortmentItem">
            <img
              style={{ objectPosition: 'bottom' }}
              src={chainRing}
              alt=""
              className="assortmentImg"
            />
          </figure>
        </div>
      </div>
      <div className="assortmentColumnGroup">
        <div className="assortmentColumn2">
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img
                style={{ objectPosition: 'bottom' }}
                src={necklace}
                alt=""
                className="assortmentImg"
              />
            </figure>
            <div className="assortmentDesk">
              <p className="assortmentInfo">
                {' '}
                Necklace
              </p>
              <button type="button" className="assortmentButton">
                <Link to="/shop" className="assortmentLink">Shop now</Link>
              </button>
            </div>
          </div>
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img
                src={nameNecklace}
                alt=""
                className="assortmentImg"
              />
            </figure>
          </div>
        </div>
        <div className="assortmentColumn3">
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img
                src={earring}
                alt=""
                className="assortmentImg"
              />
            </figure>
            <p className="assortmentInfo">
              earring
            </p>
          </div>
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img
                src={bracelet}
                alt=""
                className="assortmentImg"
              />
            </figure>
            <p className="assortmentInfo">
              bracelet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assortment;
