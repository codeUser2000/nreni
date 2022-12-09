import React from 'react';
import { Link } from 'react-router-dom';

function Product({ data }) {
  const { REACT_APP_API_URL } = process.env;
  return (
    <div className="shopProduct">
      <figure className="shopProductItem">
        <img src={REACT_APP_API_URL + data.avatar} alt="" className="shopProductImg" />
        <figcaption className="shopProductInfo">
          <h3 className="shopProductTitle">{data.title}</h3>
          <h4 className="shopProductPrice">
            {data.price}
            ֏
          </h4>
          <div className="shopProductLabel">
            <Link to={`/single/${data.id}`} className="linkToSinglePage">Buy now</Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Product;
