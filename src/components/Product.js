import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/post/ring.jpg';

function Product({ data }) {
  return (
        <div className="shopProduct">
          <figure className="shopProductItem">
            <img src={img} alt="" className="shopProductImg" />
            <figcaption className="shopProductInfo">
              <h3 className="shopProductTitle">{data.title}</h3>
              <div className="shopProductLabel">
                <Link to={`/shop/${data.id}`} className="linkToSinglePage">Buy now</Link>
              </div>
            </figcaption>
          </figure>
        </div>
  );
}

export default Product;
