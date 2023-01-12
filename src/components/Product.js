import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <h4 className="shopProductPrice">
              $
              {' '}
              {data.price}
            </h4>
          </div>
          <div className="shopProductRight">
            <FavoriteIcon
              style={{
                fill: '#c31e39',
              }}
            />
            2500
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
