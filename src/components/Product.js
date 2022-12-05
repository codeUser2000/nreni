import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <section className="shopSection">
      <div className="shopProductsRow">
        <div className="shopProduct">
          <figure className="shopProductItem">
            <img src="img/post/shopProduct1.jpg" alt="" className="shopProductImg" />
            <figcaption className="shopProductInfo">
              <h3 className="shopProductTitle">Collection</h3>
              <div className="shopProductLabel">
                <Link to="/shop" className="linkToSinglePage">Buy now</Link>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Product;
