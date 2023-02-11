import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import img from '../assets/img/post/banner.jpeg';
import { getProductDataRequest } from '../store/actions/product';
import { getBlockquoteDataRequest } from '../store/actions/blockquote';
// import ring from '../assets/img/post/ring.jpg';
// import chainRing from '../assets/img/post/chainRing.jpg';
// import necklace from '../assets/img/post/necklace.jpg';
// import nameNecklace from '../assets/img/post/nameNecklace.jpg';
// import earring from '../assets/img/post/earring.jpg';
// import bracelet from '../assets/img/post/bracelet.jpg';

function Assortment() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(getProductDataRequest(1));
      await dispatch(getBlockquoteDataRequest());
    })();
  }, []);
  const { REACT_APP_API_URL } = process.env;
  const productData = useSelector((state) => state.product.productsData);
  return (
    <>
      {productData.length > 0 ? (
        <div className="assortment">
          <div className="assortmentColumn1">
            <div className="assortmentColumnDesk">
              <figure className="assortmentItem">
                <img
                  style={{ objectPosition: 'bottom' }}
                  src={REACT_APP_API_URL + productData[0].avatar}
                  alt=""
                  className="assortmentImg"
                />
              </figure>
            </div>
            <div className="assortmentColumnDesk">
              <p className="assortmentInfo">
                {productData[1].categories.type}
              </p>
              <figure className="assortmentItem">
                <img
                  style={{ objectPosition: 'bottom' }}
                  src={REACT_APP_API_URL + productData[1].avatar}
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
                    src={REACT_APP_API_URL + productData[2].avatar}
                    alt=""
                    className="assortmentImg"
                  />
                </figure>
                <div className="assortmentDesk">
                  <p className="assortmentInfo">
                    {' '}
                    {productData[2].categories.type}
                  </p>
                  <button type="button" className="assortmentButton">
                    <Link to="/shop" className="assortmentLink">Shop now</Link>
                  </button>
                </div>
              </div>
              <div className="assortmentColumnDesk">
                <figure className="assortmentItem">
                  <img
                    src={REACT_APP_API_URL + productData[3].avatar}
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
                    src={REACT_APP_API_URL + productData[4].avatar}
                    alt=""
                    className="assortmentImg"
                  />
                </figure>
                <p className="assortmentInfo">
                  {productData[4].categories.type}
                </p>
              </div>
              <div className="assortmentColumnDesk">
                <figure className="assortmentItem">
                  <img
                    src={REACT_APP_API_URL + productData[5].avatar}
                    alt=""
                    className="assortmentImg"
                  />
                </figure>
                <p className="assortmentInfo">
                  {productData[5].categories.type}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
        : null}
    </>
  );
}

export default Assortment;
