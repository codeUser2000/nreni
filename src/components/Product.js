import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import AddCardIcon from '@mui/icons-material/AddCard';
import { toast } from 'react-toastify';
import Account from '../helpers/Account';
import Utils from '../helpers/Utils';
import { addToCartRequest, getLocalCartData } from '../store/actions/cart';

function Product({
  data,
  style,
}) {
  const { REACT_APP_API_URL } = process.env;
  const dispatch = useDispatch();

  const handleProductAdd = useCallback(async (productData) => {
    if (Account.getToken()) {
      const product = {
        quantity: 1,
        price: +productData.newPrice,
        product: productData,
      };
      await dispatch(addToCartRequest(product));
    } else {
      const product = {
        id: new Date(),
        quantity: 1,
        price: +productData.newPrice,
        product: productData,
      };
      Utils.setCart(product);
      dispatch(getLocalCartData());
    }
  }, []);

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
            {data.like}
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
            <Link to={`/single/${data.id}`} className="linkToSinglePage">View</Link>
            <button
              type="button"
              className="addToCardShop"
              onClick={() => {
                if (+data.countProduct !== 0) {
                  handleProductAdd(data)
                    .then(() => true)
                    .catch((e) => false);
                } else {
                  toast.info('This product is not available');
                }
              }}
            >
              <AddCardIcon />
            </button>
            )

          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Product;
