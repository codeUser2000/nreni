import React from 'react';
import { Link } from 'react-router-dom';

function NewProduct({ data }) {
  const { REACT_APP_API_URL } = process.env;
  return (
    <div className="newProduct">
      <figure className="newProductItem">
        <img src={REACT_APP_API_URL + data.avatar} alt="" className="newProductImg" />
        <figcaption className="newProductInfo">
          <h3 className="newProductTitle">{data.title}</h3>
          <h3 className="newProductPrice">
           $ {data.price}
          </h3>
          <div className="newProductLabel">
            <Link to={`/single/${data.id}`} className="linkToSinglePage">Buy now</Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default NewProduct;
