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
    <div style={style || {}} className="shopProduct col-md-4">
      <figure className="shopProductItem">
        <img src={REACT_APP_API_URL + data.avatar} alt="" className="shopProductImg" />
        <figcaption className="shopProductInfo">
          <div className="shopProductLeft">
            <h3 className="shopProductTitle">{data.title}</h3>
            <h4 className={classNames('shopProductPrice', { 'text-decoration-line-through': +data.discount})}>
              $
              {' '}
              {data.price}
            </h4>
            {+data.discount ? (
              <h4 className="shopProductPrice">
                $
                {' '}
                {/* eslint-disable-next-line no-mixed-operators */}
                {+data.price * +data.discount / 100}
              </h4>
            ) : null}
          </div>
          <div className="shopProductRight">
            <FavoriteIcon
              style={{
                fill: '#c31e39',
              }}
            />
            {data.likeCount.length}
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
