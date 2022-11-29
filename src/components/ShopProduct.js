import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../assets/img/post/shopProduct1.jpg';

function ShopProduct({ data }) {
  return (
    <div className="shopProduct">
      <figure className="shopProductItem">
        <img src={image} alt="" className="shopProductImg" />
        <figcaption className="shopProductInfo">
          <h3 className="shopProductTitle">{data.title}</h3>
          <p className="shopProductPrice">
            $
            {data.price}
            {data.id}
          </p>
          <div className="shopProductLabel">
            <Link to={`/shop/${data.id}`} className="linkToSinglePage">Buy now</Link>
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
