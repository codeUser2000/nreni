import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ShopProduct({ data }) {
  const { REACT_APP_API_URL } = process.env;
  return (
    <div className="shopProduct">
      <figure className="shopProductItem">
        <img src={REACT_APP_API_URL + data.avatar} alt="" className="shopProductImg" />
        <figcaption className="shopProductInfo">
          <h3 className="shopProductTitle">{data.title}</h3>
          <div className="shopProductPrice">
            <p>
              $
              {data.price}
            </p>
            <p>
              $
              {data.id}
            </p>
          </div>
          <div className="shopProductLabel">
            <Link to={`/single/${data.id}`} className="linkToSinglePage">Buy now</Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

ShopProduct.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};
export default ShopProduct;
