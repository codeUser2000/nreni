import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames';

function Product({
  data,
  style,
}) {
  const { REACT_APP_API_URL } = process.env;
  return (
    <div style={style || {}} className="shopProduct">
      <figure className="shopProductItem">
        <img src={REACT_APP_API_URL + data.avatar} alt="" className="shopProductImg" />
        {+data.discount ? (
          <div className="productDiscountCircle">
            <p className="productDiscount">
              -
              {data.discount}
              %
            </p>
          </div>
        ) : null}
        <figcaption className="shopProductInfo">
          <div className="shopLikeCount">
            <FavoriteIcon
              style={{
                width: 20,
                height: 20,
                fill: '#c31e39',
              }}
            />
            {data.likeCount.length}
          </div>
          <h3 className="shopProductTitle">{data.title}</h3>
          <div className="shopProductPrices">
            {+data.discount ? (
              <h4 className="shopProductPrice" style={{ color: '#c31e39' }}>
                $
                {' '}
                {data.newPrice}
              </h4>
            ) : null}
            <h4
              className={classNames('shopProductPrice', { 'text-decoration-line-through': +data.discount })}
            >
              $
              {' '}
              {data.oldPrice}
            </h4>
          </div>
          <div className="shopProductLabel">
            <Link to={`/single/${data.id}`} className="linkToSinglePage">Buy now</Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Product;
